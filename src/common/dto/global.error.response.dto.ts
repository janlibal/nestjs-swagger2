import { HttpStatus } from '@nestjs/common'
import { ApiProperty, ApiSchema } from '@nestjs/swagger'
import { IsBoolean, IsDate, IsNotEmpty } from 'class-validator'

@ApiSchema({ name: 'Error base response' })
export class GlobalErrorResponseDto {
  @ApiProperty({
    description: 'Result of the operation',
    example: false,
  })
  @IsBoolean()
  @IsNotEmpty()
  success: boolean

  @ApiProperty({
    description: 'API path',
    example: '/api/v1',
    type: String,
  })
  path: string

  @ApiProperty({
    description: 'Status code',
    example: HttpStatus.BAD_REQUEST,
    type: Number,
  })
  @IsDate()
  statusCode: number

  @ApiProperty({
    description: 'Timestamp',
    example: new Date().toISOString(),
    type: Date,
  })
  @IsDate()
  timestamp: string

  /*@ApiProperty({
    description: 'Result',
  })
  @IsNotEmpty()
  result: TData | TData[];*/
}
