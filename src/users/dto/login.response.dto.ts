import { ApiProperty, ApiResponseProperty, ApiSchema } from '@nestjs/swagger'
import { Expose, Type } from 'class-transformer'
import { User } from '../domain/user.domain'

@ApiSchema({name: 'Received login data'})
class ResultDto {
    @ApiProperty({
      description: 'Issued token',
    })
    @Expose()
    token: string
    
    @ApiProperty({
      description: 'Issued refresh token',
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

@ApiSchema({name: 'Login Reponse'})
export class LoginResponseDto {
  //static name = 'Login REsponse'

  @ApiProperty({
    description: 'Response satus',
    default: true
  })
  @Expose()
  status: boolean

  @ApiProperty({
    description: 'Status code',
    default: '201'
  })
  @Expose()
  statusCode: string

  @ApiProperty({
    description: 'API path',
    default: '/api/v1/auth/email/login'
  })
  @Expose()
  path: string

  @ApiProperty({
    type: ResultDto
  })
  @Expose()
  result: ResultDto
 
}
