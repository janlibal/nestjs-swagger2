import { ApiProperty, ApiSchema } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { IsNotEmpty, IsString } from 'class-validator';

@ApiSchema({name: 'Unprocessable entity'})
export class UnprocessableDto {
  
  @ApiProperty({
    description: 'Error title',
    example: 'Unprocessable entity',
  })
  @IsNotEmpty()
  @IsString()
  title: string
  
  @ApiProperty({
    description: 'Error detail',
    example: 'hasToLoginViaProvider:providerName',
  })
  @Expose()
  detail: string
  
}

