import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthEmailLoginDto } from './dto/auth.email.login.dto'
import { LoginResponseDto } from './dto/login.response.dto'
import { ApiOkResponse, ApiResponse } from '@nestjs/swagger'
import { BadRequestError } from 'src/decorators/all.errors.decorators'




@Controller('/users')
export class UserController {

  @HttpCode(HttpStatus.OK)
  //@Serialize(LoginResponseDto)
  @ApiResponse({ status: 201, type: LoginResponseDto })
  @BadRequestError('Bad Request', '/api/v1/auth/email/login', 'Something went wrong')
  @Post('/login')
  public login(@Body() loginDto: AuthEmailLoginDto){
    //return this.authService.validateLogin(loginDto)
    return 'return string'
  }
  

}