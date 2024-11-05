import { NestFactory } from '@nestjs/core'
import { GlobalModule } from './global/global.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'
import validationOptions from './utils/validation.options'

async function bootstrap() {
  const app = await NestFactory.create(GlobalModule)

  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
    .setTitle('Auth example')
    .setDescription('The Auth API description')
    .setVersion('1.0')
    .addTag('auths')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000, () => {
    console.log('App running on  3000')
  })
}
bootstrap()
