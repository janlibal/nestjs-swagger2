import { HttpStatus, Type } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';

import { ApiGlobalErrorResponse } from 'src/common/decorator/api.global.error.decorator';
import { ApiGlobalOkResponse } from 'src/common/decorator/api.global.ok.decorator';

export function OkResponse <TModel extends Type<unknown>>(model: TModel, type: 'array' | 'object', status:number, description?: string, options?: ApiResponseOptions,) {
  return ApiGlobalOkResponse(model, type, status, description,options,);
}

export function BadRequestErrorNew <TModel extends Type<unknown>>(model: TModel, type: 'array' | 'object', status:number, description?: string, options?: ApiResponseOptions,) {
  return ApiGlobalErrorResponse(model, type, status, description,options,);
}

export function UnauthorizedErrorNew <TModel extends Type<unknown>>(model: TModel, type: 'array' | 'object', status:number, description?: string, options?: ApiResponseOptions,) {
  return ApiGlobalErrorResponse(model, type, status, description,options,);
}

export function ConflictErrorNew <TModel extends Type<unknown>>(model: TModel, type: 'array' | 'object', status:number, description?: string, options?: ApiResponseOptions,) {
  return ApiGlobalErrorResponse(model, type, status, description,options,);
}

export function NotFoundErrorNew <TModel extends Type<unknown>>(model: TModel, type: 'array' | 'object', status:number, description?: string, options?: ApiResponseOptions,) {
  return ApiGlobalErrorResponse(model, type, status, description,options,);
}

export function InternalServerNew <TModel extends Type<unknown>>(model: TModel, type: 'array' | 'object', status:number, description?: string, options?: ApiResponseOptions,) {
  return ApiGlobalErrorResponse(model, type, status, description,options,);
}

