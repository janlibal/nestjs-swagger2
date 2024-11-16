import { ApiProperty, ApiSchema } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { IsArray, IsNotEmpty, IsString } from 'class-validator'

const e = [{ message: 'joe.doe@joedoe.com already exists' }]

@ApiSchema({ name: 'Conflict' })
export class ConflictDto {
  @ApiProperty({
    description: 'Error title',
    example: 'Conflict',
  })
  @IsNotEmpty()
  @IsString()
  title: string

  @ApiProperty({
    description: 'Error detail',
    example: 'The resource already exists',
  })
  @Expose()
  detail: string

  @ApiProperty({
    description: 'Errors',
    example: e,
  })
  @IsArray()
  @IsNotEmpty()
  errors: []
}
