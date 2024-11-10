import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthEmailLoginDto } from './dto/auth.email.login.dto'
import { LoginResponseDto } from './dto/login.response.dto'
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { BadRequestError, ConflictError, InternalServer, NotFoundError } from 'src/decorators/all.errors.decorators'
import { UserService } from './user.service'
import { ApiGlobalOkResponse } from 'src/common/decorator/api.global.ok.decorator'




@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Creates new user',
    description: 'Creates a user where stores firstname and lastname',
  })
  @HttpCode(HttpStatus.OK)
  //@Serialize(LoginResponseDto)
  //@ApiResponse({ status: 201, type: LoginResponseDto })
  @ApiGlobalOkResponse(LoginResponseDto, 'object')
  @BadRequestError('Bad Request', '/api/v1/auth/email/login', 'Something went wrong')
  @ConflictError('Already Exists', '/api/v1/auth/email/login', 'Resource already exists')
  @NotFoundError('Not Found', '/api/v1/auth/email/login', 'Resource not found')
  @InternalServer('Internal Server Error', '/api/v1/auth/email/login', 'Server down')
  @Post('/login')
  public login(@Body() loginDto: AuthEmailLoginDto): Promise<LoginResponseDto>{
    return this.userService.validateLogin(loginDto)
  }
  
}

const fakeUser = {
  id: '123',
  email: "joe.doe@example.com",
  firstName: "Joe",
  lastName: "Doe",
  password: 'Password123!',
  provider: "email",
}