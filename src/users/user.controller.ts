import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthEmailLoginDto } from './dto/auth.email.login.dto'
import { LoginResponseDto } from './dto/login.response.dto'
import { ApiOperation } from '@nestjs/swagger'
import { BadRequestErrorNew, OkResponse, UnauthorizedErrorNew } from 'src/decorators/all.errors.decorators'
import { UserService } from './user.service'
import { BadRequestDto } from './dto/bad.request.dto'
import { UnauthorizedDto } from './dto/unauthorized.dto'


const path = '/users'
@Controller(path)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Logs in a registered user',
    description: 'Logs in a registered user and returns their profile data',
  })
  @HttpCode(HttpStatus.OK)
  //@Serialize(LoginResponseDto)
  //@ApiResponse({ status: 201, type: LoginResponseDto })
  //@ApiGlobalOkResponse(LoginResponseDto, 'object',)
  @OkResponse(LoginResponseDto, 'object', HttpStatus.OK, 'Successful Operation')
  @BadRequestErrorNew(BadRequestDto, 'object', HttpStatus.BAD_REQUEST, 'Validation errors')
  @UnauthorizedErrorNew(UnauthorizedDto, 'object', HttpStatus.UNAUTHORIZED, 'Unauthorized exception')
  /*@ConflictErrorNew(BadRequestDto, 'object', HttpStatus.CONFLICT)
  @NotFoundErrorNew(BadRequestDto, 'object', HttpStatus.NOT_FOUND)
  @InternalServerNew(BadRequestDto, 'object', HttpStatus.INTERNAL_SERVER_ERROR)*/
  
  //@ApiGlobalErrorResponse(BadRequestDto, 'object', HttpStatus.BAD_REQUEST)
  //@BadRequestError('Bad Request', '/api/v1/auth/email/login', 'Something went wrong', ...e)
  //@BadRequestError('Bad Request', '/api/v1/auth/email/login', 'Something went wrong')
  //@ConflictError('Already Exists', '/api/v1/auth/email/login', 'Resource already exists', [errs])
  //@NotFoundError('Not Found', '/api/v1/auth/email/login', 'Resource not found', [errs])
  //@InternalServer('Internal Server Error', '/api/v1/auth/email/login', 'Server down', [errs])
  @Post('/login')
  public login(@Body() loginDto: AuthEmailLoginDto): Promise<LoginResponseDto>{
    return this.userService.validateLogin(loginDto)
  }
}