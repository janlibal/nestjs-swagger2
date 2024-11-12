import { ApiProperty, ApiResponseProperty, ApiSchema } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { Allow, isUUID } from 'class-validator'


@ApiSchema({name: 'User status'})
export class Status {
  @Allow()
  @ApiProperty({
    type: Number,
    description: 'Status when created',
    default: 2,
    example: 2
  })
  @Expose()
  id: number //number | string;

  @Allow()
  @ApiProperty({
    type: String,
    example: 'active',
    description: 'Status description active/inactive',
    default: 'active'
  })
  @Expose()
  name?: string
}
