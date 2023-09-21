// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/user.dto';
import { User } from './interfaces/user.interfaces';
import { UserClass } from './Schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(UserClass.name) private  userModel: Model<UserClass>) {}
 
async create(createUserDto: User): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    console.log("created user is",createdUser);
    
    return createdUser.save();
  }

  async findOne(phoneNumber: string): Promise<User> {
    return this.userModel.findOne({ phoneNumber }).exec();
  }
  async findByUsername(username: string): Promise<User> {
       console.log("finding the username data");
       
    return this.userModel.findOne({ userName: username }).exec();
  }
}
