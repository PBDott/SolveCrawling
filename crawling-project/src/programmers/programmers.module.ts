import { Module } from '@nestjs/common';
import { ProgrammersService } from './programmers.service';
import { ProgrammersController } from './programmers.controller';

@Module({
  controllers: [ProgrammersController],
  providers: [ProgrammersService]
})
export class ProgrammersModule {}
