import { Module } from '@nestjs/common'
import { LoggerModule } from 'nestjs-pino'
import { UserModule } from 'src/users/user.module'

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        name: 'Nestjs',
        level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
        transport: {
          targets: [
            {
              target: 'pino-pretty',
              level: 'debug',
              options: {
                colorize: true,
                ignore: 'req.headers,res.headers',
              },
            },
            {
              target: 'pino/file',
              level: 'debug',
              options: {
                destination: './logs/app.log',
                mkdir: true,
              },
            },
            {
              target: 'pino/file',
              level: 'error',
              options: {
                destination: './logs/app-error.log',
                mkdir: true,
              },
            },
          ],
        },
      },
    }),
    UserModule], //[AppModule, EmployeeModule, UserModule, NoteModule],
  controllers: [],
  providers: [],
})
export class GlobalModule {}
