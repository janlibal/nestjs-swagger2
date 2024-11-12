import { ApiProperty, ApiResponseProperty, ApiSchema } from '@nestjs/swagger'
import { Expose, Type } from 'class-transformer'
import { User } from '../domain/user.domain'
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

const e = [{ "message": "Email must be in proper format"},{"message": "Email must be a string"},{"message": "Email cannot be empty"},{"message": "Password cannot be empty"}]

@ApiSchema({name: 'Bad Request reponse'})
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
    example: e
  })
  @IsArray()
  @IsNotEmpty()
  errors: [];
  
}

