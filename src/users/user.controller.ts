import { Body, Get,  Controller, HttpCode, HttpStatus, Post, Request } from '@nestjs/common'
import { AuthEmailLoginDto } from './dto/auth.email.login.dto'
import { LoginResponseDto } from './dto/login.response.dto'
import { ApiOperation, ApiResponse, ApiSchema } from '@nestjs/swagger'
import { BadRequestError, BadRequestErrorNew, ConflictError, ConflictErrorNew, InternalError, OkResponse, SuccessResponse, UnauthorizedError, UnauthorizedErrorNew, UnprocessableEntityError, UnprocessableEntityErrorNew } from 'src/decorators/all.errors.decorators'
import { UserService } from './user.service'
import { BadRequestDto } from './dto/bad.request.dto'
import { UnauthorizedDto } from './dto/unauthorized.dto'
import { UnprocessableDto } from './dto/unprocessable.dto'
import { AuthRegisterLoginDto } from './dto/auth.register.login.dto'
import { ConflictDto } from './dto/conflict.dto'
import {  badRequestSignInErrors, conflictErrors, loginPath, mePath, registerPath, unprocessableErrors } from './constants/decorators.constants'
import { User } from './domain/user.domain'
import { NullableType } from 'src/utils/types/nullable.type'


const path = '/users'
@Controller(path)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Logs in a registered user',
    description: 'Logs in a registered user and returns their profile data',
  })
  //@Serialize(LoginResponseDto)
  /*@UnauthorizedErrorNew(UnauthorizedDto, 'object', HttpStatus.UNAUTHORIZED, 'Unauthorized exception')
  @UnprocessableEntityErrorNew(UnprocessableDto, 'object', HttpStatus.UNPROCESSABLE_ENTITY, 'Unprocessable exception')/*
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
  @HttpCode(HttpStatus.OK)
  @SuccessResponse(LoginResponseDto, 'object', loginPath, HttpStatus.OK)
  @BadRequestError('Bad Request', loginPath, 'Something went wrong', badRequestSignInErrors, 'Bad request exception')
  @UnauthorizedError('Unauthorized', loginPath, 'Invalid email or password', 'Unauthorized exception')
  @UnprocessableEntityError('Unprocessabble Error', loginPath, 'Unprocessable entity error', unprocessableErrors, 'Unprocessbale entity exception')
  @InternalError('Internal Server Error', loginPath, 'Fatal error', 'Server down')
  public login(@Body() loginDto: AuthEmailLoginDto): Promise<LoginResponseDto>{
    return this.userService.validateLogin(loginDto)
  }

  @Post('/register')
  @ApiOperation({
    summary: 'Registers a new user',
    description: 'Returns no content when registration succeeds',
  })
  /*@BadRequestError('Bad Request', loginPath, 'Something went wrong', badRequestSignUpErrors, 'Bad request exception')
  @BadRequestErrorNew(BadRequestDto, 'object', HttpStatus.BAD_REQUEST, 'Bad request exception')
  @ConflictErrorNew(ConflictDto, 'object', HttpStatus.CONFLICT, 'Conflict exception')
  @UnprocessableEntityErrorNew(UnprocessableDto, 'object', HttpStatus.UNPROCESSABLE_ENTITY, 'Unprocessable exception')*/
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({status: 204, description: 'Success, returns no content'})
  @BadRequestError('Bad Request', registerPath, 'Something went wrong', badRequestSignInErrors, 'Bad request exception')
  @ConflictError('Conflict', registerPath, 'Resource already exists', conflictErrors, 'Conflict exception')
  
  async register(@Body() createUserDto: AuthRegisterLoginDto): Promise<void> {
    return this.userService.register(createUserDto)
  }

  @Post('/logout')
  @ApiOperation({
    summary: 'Logs out user',
    description: 'Returns no content when logout succeeds',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({status: 204, description: 'Success, returns no content'})
  @InternalError('Internal Server Error', registerPath, 'Fatal error', 'Server down')
  public async logout(@Request() request): Promise<void> {
    return
  }

  @Get('me')
  @HttpCode(HttpStatus.OK)
  //@Serialize(User)
  @ApiOperation({
    summary: 'User profile',
    description: 'Displays properties of currently logged user',
  })
  @InternalError('Internal Server Error', mePath, 'Fatal error', 'Server down')
  @SuccessResponse(User, 'object', mePath, HttpStatus.OK)
  public me(@Request() request): Promise<NullableType<User>> {
    return this.userService.me()
  }

  /*@Post('/show')
  public show() {
    const arrayOfObjects = [{ "role": "Admin" }, { "role": "User" }, { "role": "Guest" }]
    return this.userService.display(arrayOfObjects)
  }*/
}