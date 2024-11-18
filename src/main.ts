import { NestFactory } from '@nestjs/core'
import { GlobalModule } from './global/global.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'
import validationOptions from './utils/validation.options'
import { ResponseInterceptor } from './interceptors/response.interceptor'
import HttpExceptionFilter from './filters/http.exception.filter'
import AnyExceptionFilter from './filters/any.exception.filter'
import { Logger, LoggerErrorInterceptor, PinoLogger } from 'nestjs-pino'
import { ConfigService } from '@nestjs/config'
import { AllConfigType } from './global/config/config.type'


async function bootstrap() {
  const app = await NestFactory.create(GlobalModule)

  const configService = app.get(ConfigService<AllConfigType>)

  //app.useLogger(app.get(PinoLogger))
  app.useLogger(app.get(Logger))

  const logger = await app.resolve(PinoLogger)

  app.useGlobalPipes(new ValidationPipe(validationOptions))

  app.useGlobalFilters(new AnyExceptionFilter(), new HttpExceptionFilter())

  //app.useGlobalInterceptors(new ResponseInterceptor(), new LoggerErrorInterceptor())
  app.useGlobalInterceptors(
    new ResponseInterceptor(),
    new LoggerErrorInterceptor(),
  )

  const config = new DocumentBuilder()
    .setTitle('Auth example')
    .setDescription('The Auth API description')
    .setVersion('1.0')
    .addTag('AuthsTag')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  const port = configService.getOrThrow('app.port', { infer: true })

  await app.listen(port, () => {
    logger.info(`Server started listening on ${port}`, 'Main')
  })
}
bootstrap()
