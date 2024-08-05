import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaekjoonController } from './baekjoon/baekjoon.controller';
import { BaekjoonService } from './baekjoon/baekjoon.service';
import { BaekjoonModule } from './baekjoon/baekjoon.module';
import { ProgrammersController } from './programmers/programmers.controller';
import { ProgrammersModule } from './programmers/programmers.module';
import { ProgrammersService } from './programmers/programmers.service';

@Module({
  imports: [BaekjoonModule, ProgrammersModule],
  controllers: [AppController, BaekjoonController, ProgrammersController],
  providers: [AppService, BaekjoonService, ProgrammersService],
})
export class AppModule {}
