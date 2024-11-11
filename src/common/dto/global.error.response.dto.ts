import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsDate, IsNotEmpty } from 'class-validator';

export class GlobalErrorResponseDto<TData> {
  @ApiProperty({
    description: 'Result of the operation',
    example: false,
  })
  @IsBoolean()
  @IsNotEmpty()
  success: boolean;

  @ApiProperty({
    description: 'Path',
    example: '/app',
    type: String,
  })
  path: String;

  @ApiProperty({
    description: 'Status code',
    example: HttpStatus.BAD_REQUEST,
    type: Number,
  })
  @IsDate()
  statusCode: Number;

  @ApiProperty({
    description: 'Timestamp',
    example: new Date().toISOString(),
    type: Date,
  })
  @IsDate()
  timestamp: String;

  /*@ApiProperty({
    description: 'Result',
  })
  @IsNotEmpty()
  result: TData | TData[];*/

 
}
