import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import {ReviewController} from "./review/review.controller";
import {ReviewService} from "./review/review.service";

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, ReviewController],
  providers: [AppService, ReviewService],
})
export class AppModule {}
