import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthEmailLoginDto } from './dto/auth.email.login.dto'
import { LoginResponseDto } from './dto/login.response.dto'
import { ApiOkResponse, ApiResponse } from '@nestjs/swagger'


@Controller('/users')
export class UserController {

  @HttpCode(HttpStatus.OK)
  //@Serialize(LoginResponseDto)
  @ApiResponse({ status: 201, type: LoginResponseDto })
  @Post('/login')
  public login(@Body() loginDto: AuthEmailLoginDto){
    //return this.authService.validateLogin(loginDto)
    return 'return string'
  }
  

}