import { Body, Controller, Post } from '@nestjs/common';
import { BaekjoonService } from './baekjoon.service';

@Controller('beakjoon')
export class BaekjoonController {
    constructor(private readonly beakjoonService: BaekjoonService) {}

    @Post()
    getBeckjoon(@Body('board') board: string) {
        return this.beakjoonService.getBeakjoon(board);
    }

    @Post()
    getBeckjoonOne(@Body('board') board:string) {
        
    }
}
