import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';


import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ErrorResponse } from './interfaces/error.response';
import { Note } from './domains/note.domain'


@ApiTags('note')
@Controller('note')
export class NoteController {



  

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: Note, isArray: false})
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse, isArray: true})
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse})
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse})
  async create(@Body() Note: Note) {
    return true
  }

}