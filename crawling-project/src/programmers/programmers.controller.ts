import { Body, Controller, Post } from '@nestjs/common';
import { ProgrammersService } from './programmers.service';

@Controller('programmers')
export class ProgrammersController {
    constructor(private readonly programmersService: ProgrammersService) {}

    @Post('all')
    getProgrammers(
        @Body('id') id: string,
        @Body('repository') repository: string,
        @Body('level') level: number,
    ): Promise<string[]> {
        return this.programmersService.getProgrammers(id, repository, level); 
    }

    @Post('one')
    getProgrammersOne(
        @Body('id') id: string,
        @Body('repository') repository: string,
        @Body('level') level: number,
        @Body('number') number: number,
    ): Promise<string[]> {
        return this.programmersService.getProgrammersOne(id, repository, level, number);
    }
    
}
