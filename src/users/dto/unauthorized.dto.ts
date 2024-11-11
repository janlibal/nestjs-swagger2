import { ApiProperty, ApiResponseProperty, ApiSchema } from '@nestjs/swagger'
import { Expose, Type } from 'class-transformer'
import { User } from '../domain/user.domain'
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

const e = [{ "message": "Email must be in proper format"},{"message": "Email must be a string"},{"message": "Email cannot be empty"},{"message": "Password cannot be empty"}]

@ApiSchema({name: 'Unauthorized'})
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

