import { NestFactory } from '@nestjs/core'
import { GlobalModule } from './global/global.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'
import validationOptions from './utils/validation.options'
import { ResponseInterceptor } from './interceptors/response.interceptor'
import HttpExceptionFilter from './filters/http.exception.filter'
import AnyExceptionFilter from './filters/any.exception.filter'


async function bootstrap() {
  const app = await NestFactory.create(GlobalModule)

  app.useGlobalPipes(new ValidationPipe(validationOptions))

  app.useGlobalFilters(new AnyExceptionFilter(), new HttpExceptionFilter())

  //app.useGlobalInterceptors(new ResponseInterceptor(), new LoggerErrorInterceptor())
  app.useGlobalInterceptors(
    new ResponseInterceptor(),
  )
  
  const config = new DocumentBuilder()
    .setTitle('Auth example')
    .setDescription('The Auth API description')
    .setVersion('1.0')
    .addTag('AuthsTag')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000, () => {
    console.log('App running on  3000')
  })
}
bootstrap()
