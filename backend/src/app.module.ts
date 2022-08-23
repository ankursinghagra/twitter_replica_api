import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    LoginModule,
    ConfigModule.forRoot({
    	isGlobal: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
