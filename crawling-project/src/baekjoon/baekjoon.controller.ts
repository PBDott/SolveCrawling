import { Body, Controller, Post } from '@nestjs/common';
import { BaekjoonService } from './baekjoon.service';

@Controller('baekjoon')
export class BaekjoonController {
  constructor(private readonly baekjoonService: BaekjoonService) {}

  @Post('all')
  getBaekjoon(
    @Body('id') id: string,
    @Body('repository') repository: string,
    @Body('rank') rank: string,
  ): Promise<string[]> {
    return this.baekjoonService.getBaekjoon(id, repository, rank);
  }

  @Post('one')
  getBeckjoonOne(  
    @Body('id') id: string,
    @Body('repository') repository: string,
    @Body('rank') rank: string,
    @Body('number') number: number,
  ): Promise<string[]> {
    return this.baekjoonService.getBaekjoonOne(id, repository, rank, number);
  }
}
