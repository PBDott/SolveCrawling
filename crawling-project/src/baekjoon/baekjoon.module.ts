import { Module } from '@nestjs/common';
import { BaekjoonController } from './baekjoon.controller';
import { BaekjoonService } from './baekjoon.service';

@Module({
    controllers: [BaekjoonController],
    providers: [BaekjoonService]
})

export class BaekjoonModule {}