import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthEmailLoginDto } from './dto/auth.email.login.dto'
import { LoginResponseDto } from './dto/login.response.dto'
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { BadRequestError, ConflictError, InternalServer, NotFoundError } from 'src/decorators/all.errors.decorators'
import { UserService } from './user.service'
import { ApiGlobalOkResponse } from 'src/common/decorator/api.global.ok.decorator'
import { BadRequestDto } from './dto/bad.request.dto'
import { ApiGlobalErrorResponse } from 'src/common/decorator/api.global.error.decorator'




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
  @ApiGlobalErrorResponse(BadRequestDto, 'object')
  

  //@BadRequestError('Bad Request', '/api/v1/auth/email/login', 'Something went wrong', [errs])
  //@ConflictError('Already Exists', '/api/v1/auth/email/login', 'Resource already exists', [errs])
  //@NotFoundError('Not Found', '/api/v1/auth/email/login', 'Resource not found', [errs])
  //@InternalServer('Internal Server Error', '/api/v1/auth/email/login', 'Server down', [errs])
  @Post('/login')
  public login(@Body() loginDto: AuthEmailLoginDto): Promise<LoginResponseDto>{
    return this.userService.validateLogin(loginDto)
  }
}

const errs = [
  {
      "message": "Email must be in proper format"
  },
  {
      "message": "Email must be a string"
  },
  {
      "message": "Email cannot be empty"
  },
  {
      "message": "Password cannot be empty"
  }
]