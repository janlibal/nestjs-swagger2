import { Injectable, Logger } from '@nestjs/common'
import { LoginResponseDto } from './dto/login.response.dto'
import UnauthorizedError from 'src/exceptions/unauthorized.exception'
import { AuthProvidersEnum } from './auth.providers.enum'
import UnprocessableError from 'src/exceptions/unprocessable.exception'
import { AuthRegisterLoginDto } from './dto/auth.register.login.dto'
import { RoleEnum } from 'src/roles/roles.enum'
import ResourceExistsError from 'src/exceptions/already.exists.exception'
import { StatusEnum } from 'src/statuses/statuses.enum'
import { NullableType } from 'src/utils/types/nullable.type'
import { User } from './domain/user.domain'

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name)

  
  async validateLogin(): Promise<LoginResponseDto> {
    this.logger.log('User validation started')
    //const user = null
    const user = {
      token: 'token123',
      refreshToken: 'refreshToken',
      tokenExpires: 20241232,
      user: fakeUser,
    }

    if (!user) {
      this.logger.log('Invalid email or password')
      throw new UnauthorizedError('Invalid email or password')
    }

    if (user.user.provider !== AuthProvidersEnum.email) {
      this.logger.log(`hasToLoginViaProvider:${user.user.provider}`)
      throw new UnprocessableError(
        `hasToLoginViaProvider:${user.user.provider}`,
      )
    }

    if (!user.user.password) {
      this.logger.log('missing passowrd')
      throw new UnprocessableError('missingPassword')
    }

    this.logger.log('Login successfully finished')

    return user
  }

  async register(dto: AuthRegisterLoginDto): Promise<void> {
    this.logger.log('New user registration started')
    const user = {
      id: '123',
      email: dto.email,
      firstName: dto.firstName,
      lastName: dto.lastName,
      password: dto.password,
      role: 2,
      status: 1,
      provider: 'email',
    }

    if (user.role) {
      const roleObject = Object.values(RoleEnum)
        .map(String)
        .includes(String(user.role))
      if (!roleObject) {
        this.logger.log('roleIdMissing')
        throw new UnprocessableError(`roleIdMissing`)
      }
    }

    if (user.status) {
      const statusObject = Object.values(StatusEnum)
        .map(String)
        .includes(String(user.status))
      if (!statusObject) {
        this.logger.log('statusIdMissing')
        throw new UnprocessableError(`statusIdMissing`)
      }
    }

    const userObject = null //{email: 'fake@email.com'}
    if (userObject) {
      this.logger.log(`${userObject.email} already exists`)
      throw new ResourceExistsError(userObject.email)
    }
    this.logger.log('Registration successfully finished')
  }

  async me(): Promise<NullableType<User>> {
    this.logger.log('Retrieving user data')
    const data = fakeUser
    this.logger.log('User data retrieval finished')
    return data
  }

  display(array: object[]) {
    return array
  }
}

const fakeUser = {
  id: '123',
  email: 'joe.doe@example.com',
  firstName: 'Joe',
  lastName: 'Doe',
  password: 'Password123!',
  provider: 'email',
  status: {
    id: 2,
  },
  role: {
    id: 2,
  },
}
