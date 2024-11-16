import { ApiProperty, ApiSchema } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { IsNotEmpty, IsString } from 'class-validator'

@ApiSchema({ name: 'Unauthorized' })
export class UnauthorizedDto {
  @ApiProperty({
    description: 'Error title',
    example: 'Unauthorized',
  })
  @IsNotEmpty()
  @IsString()
  title: string

  @ApiProperty({
    description: 'Error detail',
    example: 'Invalid username or password',
  })
  @Expose()
  detail: string
}
