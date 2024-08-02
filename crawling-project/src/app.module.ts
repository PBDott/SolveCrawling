import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaekjoonController } from './baekjoon/baekjoon.controller';
import { BaekjoonService } from './baekjoon/baekjoon.service';
import { BaekjoonModule } from './baekjoon/baekjoon.module';

@Module({
  imports: [BaekjoonModule],
  controllers: [AppController, BaekjoonController],
  providers: [AppService, BaekjoonService],
})
export class AppModule {}
