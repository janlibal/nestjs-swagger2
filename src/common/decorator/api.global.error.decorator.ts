import { applyDecorators, HttpStatus, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { GlobalErrorResponseDto } from '../dto/global.error.response.dto';

export const ApiGlobalErrorResponse = <TModel extends Type<unknown>>(
  model: TModel,
  type: 'array' | 'object',
) => {
  return applyDecorators(
    ApiExtraModels(GlobalErrorResponseDto, model),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
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
  );
};