import { Options } from "pino-http";

export function consoleLoggingConfig(): Options {
    return {
      messageKey: 'msg',
      transport: {
        targets: [
            {
              target: 'pino-pretty',
              level: 'debug',
              options: {
                singleLine: true,
                colorize: true,
                ignore: 'req.id,req.method,req.url,req.headers,req.remoteAddress,req.remotePort',
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
            {
              target: '@youngkiu/pino-slack-webhook',
              options: {
                webhookUrl: 'URL',
                channel: '#logs',
                username: 'janlibal',
                icon_emoji: ':ghost:'
              }
            }
          ],
      },
    }
}


/*
export function consoleLoggingConfig(): Options {
    return {
      messageKey: 'msg',
      transport: {
        target: 'pino-pretty',
        options: {
          singleLine: true,
          ignore:
            'req.id,req.method,req.url,req.headers,req.remoteAddress,req.remotePort,res.headers',
        },
      },
    }
}
*/