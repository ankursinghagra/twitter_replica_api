import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { LoginController } from './login/login.controller';
import { RegisterController } from './register/register.controller';

var routes = [
  {
    path: '/',
    //module: UsersModule,
    children: [
      {
        path: 'login',
        module: LoginController,
      },
      {
        path: 'register',
        module: RegisterController,
      },
    ],
  }
];

@Module({
  controllers: [UsersController, LoginController, RegisterController]
})
export class UsersModule {}
