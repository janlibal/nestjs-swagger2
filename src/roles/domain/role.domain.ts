import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { Allow } from 'class-validator'

export class Role {
  @Allow()
  @ApiProperty({
    type: Number,
    description: 'Role Id',
    default: 2,
    example: 1
  })
  @Expose()
  id: number //number| string;

  @Allow()
  @ApiProperty({
    type: String,
    description: 'Access level',
    default: 2,
    example: 'admin',
  })
  @Expose()
  name?: string
}