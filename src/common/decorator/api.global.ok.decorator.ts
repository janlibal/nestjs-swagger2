import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { GlobalResponseDto } from '../dto/global.response.dto';



export const ApiGlobalOkResponse = <TModel extends Type<unknown>>(
  model: TModel,
  type: 'array' | 'object',
) => {
  return applyDecorators(
    ApiExtraModels(GlobalResponseDto, model),
    ApiOkResponse({
      schema: {
        title: `ApiGlobalResponseOf${model.name}`,
        allOf: [
          { $ref: getSchemaPath(GlobalResponseDto) },
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