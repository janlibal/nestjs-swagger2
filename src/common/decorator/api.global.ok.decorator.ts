import { applyDecorators, Type } from '@nestjs/common'
import {
  ApiExtraModels,
  ApiResponse,
  ApiResponseOptions,
  getSchemaPath,
} from '@nestjs/swagger'
import { GlobalOkResponseDto } from '../dto/global.ok.response.dto'

export const ApiGlobalOkResponse = <TModel extends Type<unknown>>(
  model: TModel,
  type: 'array' | 'object',
  status: number,
  description?: string,
  options?: ApiResponseOptions,
) => {
  return applyDecorators(
    ApiExtraModels(GlobalOkResponseDto, model),
    ApiResponse({
      ...options,
      status: status,
      description: description,
      schema: {
        title: `ApiGlobalOkResponseOf${model.name}`,
        allOf: [
          { $ref: getSchemaPath(GlobalOkResponseDto) },
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
