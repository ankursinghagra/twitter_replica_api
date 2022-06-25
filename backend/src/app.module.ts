import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

var routes = [
  {
    path: '/',
    module: AppController,
  },
  {
    path: 'users',
    module: UsersModule,
  }
];

@Module({
  imports: [
    UsersModule,
    RouterModule.register(routes),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
