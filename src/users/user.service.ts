import { HttpStatus, INestApplication, Injectable, InternalServerErrorException } from '@nestjs/common';
import { AuthEmailLoginDto } from './dto/auth.email.login.dto';
import { LoginResponseDto } from './dto/login.response.dto';
import UnauthorizedError from 'src/exceptions/unauthorized.exception';
import { AuthProvidersEnum } from './auth.providers.enum';
import UnprocessableError from 'src/exceptions/unprocessable.exception';
import { AuthRegisterLoginDto } from './dto/auth.register.login.dto';
import { RoleEnum } from 'src/roles/roles.enum';
import ResourceExistsError from 'src/exceptions/already.exists.exception';


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

  async register(dto: AuthRegisterLoginDto): Promise<void> {
    const user = {
      id: '123',
      email: dto.email,
      firstName: dto.firstName,
      lastName: dto.lastName,
      password: dto.password,
      role: 2,
      status: 2,
      provider: 'email'
    }

    if (user.role) {
      const roleObject = Object.values(RoleEnum)
        .map(String)
        .includes(String(user.role))
      if (!roleObject) {
        throw new UnprocessableError(`roleIdMissing`)
      }
    }

    if (user.role) {
      const roleObject = Object.values(RoleEnum)
        .map(String)
        .includes(String(user.status))
      if (!roleObject) {
        throw new UnprocessableError(`statusIdMissing`)
      }
    }

    const userObject = {email: 'fake@email.com'}
    if (userObject) {
      throw new ResourceExistsError(userObject.email)
    }

  }

  display(array: object[]){
    return array
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
