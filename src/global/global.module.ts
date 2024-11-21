import { Module, RequestMethod } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { Logger, LoggerModule } from 'nestjs-pino'
import { UserModule } from 'src/users/user.module'
import { configSetup } from 'src/config/config.setup';
import { loggerSetuo } from 'src/logger/logger.setup';
import { MiddlewareConsumer, NestModule, RouteInfo } from '@nestjs/common/interfaces';
import { AuthMiddleware } from 'src/middleware/auth.middleware';


@Module({
  imports: 
  [ConfigModule.forRoot(configSetup),
  LoggerModule.forRootAsync(loggerSetuo),
  UserModule], //[AppModule, EmployeeModule, UserModule, NoteModule],
  controllers: [],
  providers: [Logger],
})
//export class GlobalModule {}
export class GlobalModule implements NestModule {
  public publicRoutes: Array<RouteInfo> = [
    { path: `/users/login`, method: RequestMethod.POST },
    { path: `/users/register`, method: RequestMethod.POST },
  ];
  configure(consumer: MiddlewareConsumer) {
    // apply auth middleware to all except health check route
    consumer
      .apply(AuthMiddleware)
      .exclude(...this.publicRoutes)
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      });
  }
}

