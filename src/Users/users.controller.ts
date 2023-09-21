// src/users/users.controller.ts
import { Controller, Post, Body, Get, Param,Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from './interfaces/user.interfaces'
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    console.log("Received data:", createUserDto);       
    return this.usersService.create(createUserDto);
  }

  @Get(':phoneNumber')
  async findOne(@Param('phoneNumber') phoneNumber: string): Promise<User> {
    return this.usersService.findOne(phoneNumber);
  }
  @Get('ping')
  async ping(@Res() res: Response): Promise<void> {
    res.status(200).send('Server is running');
  }
  @Get(':username')
  async findByUsername(@Param('username') username: string) {
    console.log("called controller");
    
    return this.usersService.findByUsername(username);
  }
}
