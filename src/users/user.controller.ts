import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthEmailLoginDto } from './dto/auth.email.login.dto'
import { LoginResponseDto } from './dto/login.response.dto'
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { BadRequestError, ConflictError, InternalServer, NotFoundError } from 'src/decorators/all.errors.decorators'




@Controller('/users')
export class UserController {

  @ApiOperation({
    summary: 'Creates new user',
    description: 'Creates a user where stores firstname and lastname',
  })
  @HttpCode(HttpStatus.OK)
  //@Serialize(LoginResponseDto)
  @ApiResponse({ status: 201, type: LoginResponseDto })
  @BadRequestError('Bad Request', '/api/v1/auth/email/login', 'Something went wrong')
  @ConflictError('Already Exists', '/api/v1/auth/email/login', 'Resource already exists')
  @NotFoundError('Not Found', '/api/v1/auth/email/login', 'Resource not found')
  @InternalServer('Internal Server Error', '/api/v1/auth/email/login', 'Server down')
  @Post('/login')
  public login(@Body() loginDto: AuthEmailLoginDto){
    //return this.authService.validateLogin(loginDto)
    return 'return string'
  }
  

}