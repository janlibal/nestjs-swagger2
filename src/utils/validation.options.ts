import { ValidationPipeOptions } from '@nestjs/common'
import BadRequest from 'src/exceptionts/bad.request.exception'

const validationOptions: ValidationPipeOptions = {
  transform: true,
  exceptionFactory: (errors) => {
    const messages = errors.reduce((acc, error) => {
      if (error.constraints) {
        acc.push(...Object.values(error.constraints))
      }
      return acc
    }, [])
    return new BadRequest(messages)
  },
}

export default validationOptions
