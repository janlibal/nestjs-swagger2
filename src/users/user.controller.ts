import { Body, Controller, HttpCode, HttpStatus, Post, Request } from '@nestjs/common'
import { AuthEmailLoginDto } from './dto/auth.email.login.dto'
import { LoginResponseDto } from './dto/login.response.dto'
import { ApiOperation, ApiResponse, ApiSchema } from '@nestjs/swagger'
import { BadRequestErrorNew, ConflictErrorNew, OkResponse, UnauthorizedErrorNew, UnprocessableEntityErrorNew } from 'src/decorators/all.errors.decorators'
import { UserService } from './user.service'
import { BadRequestDto } from './dto/bad.request.dto'
import { UnauthorizedDto } from './dto/unauthorized.dto'
import { UnprocessableDto } from './dto/unprocessable.dto'
import { AuthRegisterLoginDto } from './dto/auth.register.login.dto'
import { ConflictDto } from './dto/conflict.dto'


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
  @BadRequestErrorNew(BadRequestDto, 'object', HttpStatus.BAD_REQUEST, 'Bad request exception')
  @UnauthorizedErrorNew(UnauthorizedDto, 'object', HttpStatus.UNAUTHORIZED, 'Unauthorized exception')
  @UnprocessableEntityErrorNew(UnprocessableDto, 'object', HttpStatus.UNPROCESSABLE_ENTITY, 'Unprocessable exception')


  
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

  @Post('/register')
  @ApiOperation({
    summary: 'Registers a new user',
    description: 'Returns no content when registration succeeds',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({status: 204, description: 'Returns no content'})
  @BadRequestErrorNew(BadRequestDto, 'object', HttpStatus.BAD_REQUEST, 'Bad request exception')
  @ConflictErrorNew(ConflictDto, 'object', HttpStatus.CONFLICT, 'Conflict exception')
  @UnprocessableEntityErrorNew(UnprocessableDto, 'object', HttpStatus.UNPROCESSABLE_ENTITY, 'Unprocessable exception')
  async register(@Body() createUserDto: AuthRegisterLoginDto): Promise<void> {
    return this.userService.register(createUserDto)
  }

  @Post('/logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({status: 204, description: 'Returns no content'})
  public async logout(@Request() request): Promise<void> {
    return
  }

  @Post('/show')
  public show() {
    const arrayOfObjects = [{ "role": "Admin" }, { "role": "User" }, { "role": "Guest" }]
    return this.userService.display(arrayOfObjects)
  }
}