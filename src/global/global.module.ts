import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { Logger, LoggerModule } from 'nestjs-pino'
import { UserModule } from 'src/users/user.module'
import { configSetup } from 'src/config/config.setup';
import { loggerSetuo } from 'src/logger/logger.setup';


@Module({
  imports: 
  [ConfigModule.forRoot(configSetup),
  LoggerModule.forRootAsync(loggerSetuo),
  UserModule], //[AppModule, EmployeeModule, UserModule, NoteModule],
  controllers: [],
  providers: [Logger],
})
export class GlobalModule {}
/*export class GlobalModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestsLogMiddleware).forRoutes('*');
  }
}*/
