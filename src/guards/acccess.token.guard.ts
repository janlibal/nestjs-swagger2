import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { HttpStatus } from '@nestjs/common/enums'
import { HttpException } from '@nestjs/common/exceptions'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'

import { IRequest } from './interfaces/request.interface'
import { IS_PUBLIC_KEY } from './decorators/public.decorator'
import { ConfigService } from '@nestjs/config'
import { AllConfigType } from 'src/global/config/config.type'
import UnauthorizedError from 'src/exceptions/unauthorized.exception'
import UnprocessableError from 'src/exceptions/unprocessable.exception'

/*
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndOverride<(number | string)[]>(
      'roles',
      [context.getClass(), context.getHandler()],
    )
    if (!roles.length) {
      return true
    }
    const request = context.switchToHttp().getRequest()

    return roles.map(String).includes(String(request.user?.role?.id))
  }
}*/

@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(
    private readonly reflect: Reflector,
    private jwtService: JwtService,
    private configService: ConfigService<AllConfigType>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const ctx = context.switchToHttp()
      const request = ctx.getRequest<IRequest>()

      const isPublic = this.reflect.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        context.getClass(),
        context.getHandler(),
      ])

      if (isPublic) return true

      const authorization = request.headers.authorization

      if (
        !authorization ||
        Array.isArray(authorization) ||
        typeof authorization !== 'string'
      )
        //throw new HttpException('Invalid Headers', HttpStatus.UNAUTHORIZED)
        throw new UnprocessableError('Invalid headers!!')

      const [jwt, accessToken] = authorization.split(' ')

      if (jwt !== 'jwt')
        throw new HttpException('No jwt', HttpStatus.UNAUTHORIZED)

      //verify token using jwt service
      
      /*     
      //verify token using jwt service
      const decodedToken = this.jwtService.verify<DecodedTokenI>(accessToken, {
        secret: this.configService.get<string>('USER_ACCESS_TOKEN_SECRET')!,
      })

      
      const { sub } = decodedToken

      //check if the token is in Redis
      const cacheObject = await this.cacheService.get<CacheObjectI>(sub + '')

      //does the Redis token match the Headers token?
      const isTokenFromCacheSameAsTokenFromHeaders =
        cacheObject?.accessToken === accessToken

      if (!isTokenFromCacheSameAsTokenFromHeaders)
        throw new HttpException('Nice Try', HttpStatus.UNAUTHORIZED)

      request.user = decodedToken*/

      return true

    } catch (error: any) {
      throw new HttpException(
        !!error?.message ? error.message : 'You must be logged in first',
        !!error?.status ? error.status : HttpStatus.UNAUTHORIZED,
      )
    }
  }
}
