import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';

@Module({
  imports: [],
  controllers: [NoteController],
  providers: []
})
export class NoteModule {}