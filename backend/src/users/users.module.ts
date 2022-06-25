import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { LoginController } from './login/login.controller';
import { RegisterController } from './register/register.controller';

@Module({
  imports: [
    LoginController,
    RegisterController
  ],
  controllers: [UsersController, LoginController, RegisterController]
})
export class UsersModule {}
