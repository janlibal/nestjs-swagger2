import { ApiProperty, ApiResponseProperty, ApiSchema } from '@nestjs/swagger'
import { Expose, Type } from 'class-transformer'
import { User } from '../domain/user.domain'
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

@ApiSchema({name: 'Bad Request Reponse'})
export class BadRequestDto {
  
  @ApiProperty({
    description: 'Error title',
    example: 'Bad Request',
  })
  @IsNotEmpty()
  @IsString()
  title: string
  
  @ApiProperty({
    description: 'Error detail',
    example: 'Something went wrong',
  })
  @Expose()
  detail: string
  
  @ApiProperty({
    description: 'Errors',
    example: [],
  })
  @IsArray()
  @IsNotEmpty()
  errors: string;
  
}
