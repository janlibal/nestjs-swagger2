import { HttpStatus, INestApplication, Injectable, InternalServerErrorException } from '@nestjs/common';
import { AuthEmailLoginDto } from './dto/auth.email.login.dto';
import { LoginResponseDto } from './dto/login.response.dto';
import UnauthorizedError from 'src/exceptions/unauthorized.exception';


@Injectable()
export class UserService {
  async validateLogin(loginDto: AuthEmailLoginDto): Promise<LoginResponseDto> {
    const user = null
    const uaser = {
      token: 'token123',
      refreshToken: 'refreshToken',
      tokenExpires: 20241232,
      user: fakeUser
    }

    if (!user) {
      throw new UnauthorizedError('Invalid email or password')
    }

    return user
  }
} 


const fakeUser = {
  id: '123',
  email: "joe.doe@example.com",
  firstName: "Joe",
  lastName: "Doe",
  password: 'Password123!',
  provider: "email"
}
