import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserClass, UserSchema } from './Schema/user.schema'; // Import the UserModel

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: UserClass.name, schema: UserSchema },
      ])
    ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
