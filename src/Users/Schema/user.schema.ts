// src/users/schemas/user.schema.ts
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserClass extends mongoose.Document {
  @Prop()
  userName:string;
    @Prop()
  phoneNumber: string;
  @Prop()
  email: string;
  @Prop()
  name: string;
  @Prop()
  dateOfBirth: string;
}
export const UserSchema = SchemaFactory.createForClass(UserClass);
