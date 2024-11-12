import { HttpStatus } from '@nestjs/common';
import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsDate, IsNotEmpty } from 'class-validator';

@ApiSchema({name: 'Error base response'})
export class GlobalErrorResponseDto<TData> {
  @ApiProperty({
    description: 'Result of the operation',
    example: false,
  })
  @IsBoolean()
  @IsNotEmpty()
  success: boolean;

  @ApiProperty({
    description: 'API path',
    example: '/api/v1',
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
