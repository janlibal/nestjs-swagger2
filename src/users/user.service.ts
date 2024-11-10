import { HttpStatus, INestApplication, Injectable, InternalServerErrorException } from '@nestjs/common';
import { AuthEmailLoginDto } from './dto/auth.email.login.dto';
import { LoginResponseDto } from './dto/login.response.dto';


@Injectable()
export class UserService {
  async validateLogin(loginDto: AuthEmailLoginDto): Promise<LoginResponseDto> {
    const data = {
      token: 'token123',
      refreshToken: 'refreshToken',
      tokenExpires: 20241232,
      user: fakeUser
    }
    return data
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
