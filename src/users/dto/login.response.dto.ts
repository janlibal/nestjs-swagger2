import { ApiProperty, ApiResponseProperty, ApiSchema } from '@nestjs/swagger'
import { Expose, Type } from 'class-transformer'
import { User } from '../domain/user.domain'
import { IsNotEmpty, IsString } from 'class-validator';

@ApiSchema({name: 'Login Reponse'})
export class LoginResponseDto {
  
  @ApiProperty({
    description: 'Token',
    example: 'Token123!',
  })
  @IsNotEmpty()
  @IsString()
  token: string
  
  @ApiProperty({
    description: 'Issued refresh token',
    example: 'Refresh123!',
  })
  @Expose()
  refreshToken: string
  
  @ApiProperty({
    description: 'Token expiry date',
    default: new Date().toISOString(),
  })
  @Expose()
  tokenExpires: number

  @ApiProperty({
    type: User
  })
  @Expose()
  user: User
}
