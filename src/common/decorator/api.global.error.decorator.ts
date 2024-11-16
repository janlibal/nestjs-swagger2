import { applyDecorators, Type } from '@nestjs/common'
import {
  ApiExtraModels,
  ApiResponse,
  ApiResponseOptions,
  getSchemaPath,
} from '@nestjs/swagger'
import { GlobalErrorResponseDto } from '../dto/global.error.response.dto'

export const ApiGlobalErrorResponse = <TModel extends Type<unknown>>(
  model: TModel,
  type: 'array' | 'object',
  status: number,
  description?: string,
  options?: ApiResponseOptions,
) => {
  return applyDecorators(
    ApiExtraModels(GlobalErrorResponseDto, model),
    ApiResponse({
      ...options,
      status: status,
      description: description,
      schema: {
        title: `ApiGlobalErrorResponseOf${model.name}`,
        allOf: [
          { $ref: getSchemaPath(GlobalErrorResponseDto) },
          {
            properties: {
              result:
                type === 'array'
                  ? {
                      type: 'array',
                      items: { $ref: getSchemaPath(model) },
                    }
                  : {
                      type: 'object',
                      $ref: getSchemaPath(model),
                    },
            },
          },
        ],
      },
    }),
  )
}
