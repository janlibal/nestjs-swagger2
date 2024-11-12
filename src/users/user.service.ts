import { HttpStatus, INestApplication, Injectable, InternalServerErrorException } from '@nestjs/common';
import { AuthEmailLoginDto } from './dto/auth.email.login.dto';
import { LoginResponseDto } from './dto/login.response.dto';
import UnauthorizedError from 'src/exceptions/unauthorized.exception';
import { AuthProvidersEnum } from './auth.providers.enum';
import UnprocessableError from 'src/exceptions/unprocessable.exception';


@Injectable()
export class UserService {
  async validateLogin(loginDto: AuthEmailLoginDto): Promise<LoginResponseDto> {
    //const user = null
    const user = {
      token: 'token123',
      refreshToken: 'refreshToken',
      tokenExpires: 20241232,
      user: fakeUser
    }

    if (!user) {
      throw new UnauthorizedError('Invalid email or password')
    }

    if (user.user.provider !== AuthProvidersEnum.email) {
      throw new UnprocessableError(`hasToLoginViaProvider:${user.user.provider}`)
    }

    if (!user.user.password) {
      throw new UnprocessableError('missingPassword')
    }

    return user
  }
} 


const fakeUser = {
  id: '123',
  email: 'joe.doe@example.com',
  firstName: 'Joe',
  lastName: 'Doe',
  password: 'Password123!',
  provider: 'email'
}
