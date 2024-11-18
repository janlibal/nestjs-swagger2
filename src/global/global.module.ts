import { MiddlewareConsumer, Module } from '@nestjs/common'
import { Logger, LoggerModule } from 'nestjs-pino'
import { UserModule } from 'src/users/user.module'
import { getCorrelationId } from 'src/utils/get.correlation.id';
import { v4 as uuidv4 } from 'uuid'
import { Request } from 'express';
import { RequestsLogMiddleware } from 'src/middleware/requests-log-middleware';
import { loggingRedactPaths } from 'src/shared/constants/global.constants';
import { single } from 'rxjs';
import { customSuccessMessage } from 'src/logger/messages';


@Module({
  imports: 
  [
  LoggerModule.forRootAsync({
    useFactory: async () => {
      //await somePromise(); // Any initialization logic if needed
      const isDebug = true
      return {
        pinoHttp: {
            level: 'debug', 
            serializers: isDebug
            ? {
                req: (req) => {
                  req.body = req.raw.body
                  return req
                },
              }
            : undefined,
            customSuccessMessage,
            redact: {
              paths: loggingRedactPaths,
              censor: '**CCPA COMPLIANT / GDPR COMPLIANT**'
            },
            messageKey: 'msg',
            transport: {
              target: 'pino-pretty',
              options: {
                colorize: true,
                singleLine: true,
                ignore: 'req.id,req.method,req.url,req.headers,req.remoteAddress,req.remotePort,res.headers',
              }
            },
            autoLogging: false, 
            base: null,
            quietReqLogger: true,
            genReqId: (request: Request) => getCorrelationId(request), //set traceID
            
        },
      }
    },
  }),
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
