import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';
import UnauthorizedError from 'src/exceptions/unauthorized.exception';


@Injectable()
export class AuthMiddleware implements NestMiddleware {

  public async use(req: Request, _: Response, next: NextFunction) {
    
    const authorization = req.headers.authorization

    if (!authorization ||Array.isArray(authorization) || typeof authorization !== 'string'
    )
      throw new UnauthorizedError('Invalid Headers')

    const [jwt, accessToken] = authorization.split(' ')

    if (jwt !== 'jwt')
    throw new UnauthorizedError('No jwt')

    

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


    next();
  }
}