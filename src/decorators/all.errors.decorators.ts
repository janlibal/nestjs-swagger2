import { HttpStatus, Type } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';
import { ApiErrorDecorator } from 'src/common/decorator/api.error.decorator';

import { ApiGlobalErrorResponse } from 'src/common/decorator/api.global.error.decorator';
import { ApiGlobalOkResponse } from 'src/common/decorator/api.global.ok.decorator';
import { ApiOk } from 'src/common/decorator/api.ok.decorator';



export function SuccessResponse <TModel extends Type<unknown>>(model: TModel, type: 'object', path: string, status:number, description?: string, options?: ApiResponseOptions,) {
  return ApiOk(model, type, path, status, description,options,);
}


export function BadRequestError(title: string,path: string,detail: string, errors: object[], description?: string, options?: ApiResponseOptions,) {
  return ApiErrorDecorator(HttpStatus.BAD_REQUEST,title,path,detail, errors, description,options,);
}

export function UnauthorizedError(title: string,path: string,detail: string, description?: string, errors?: object[],  options?: ApiResponseOptions,) {
  return ApiErrorDecorator(HttpStatus.UNAUTHORIZED,title,path,detail, errors, description,options,);
}

export function InternalError(title: string,path: string,detail: string, description?: string, errors?: object[],  options?: ApiResponseOptions,) {
  return ApiErrorDecorator(HttpStatus.INTERNAL_SERVER_ERROR,title,path,detail, errors, description,options,);
}

export function UnprocessableEntityError(title: string,path: string,detail: string, errors: object[], description?: string, options?: ApiResponseOptions,) {
  return ApiErrorDecorator(HttpStatus.UNPROCESSABLE_ENTITY,title,path,detail, errors, description,options,);
}

export function ConflictError(title: string,path: string,detail: string, errors: object[], description?: string, options?: ApiResponseOptions,) {
  return ApiErrorDecorator(HttpStatus.CONFLICT,title,path,detail, errors, description,options,);
}



export function OkResponse <TModel extends Type<unknown>>(model: TModel, type: 'array' | 'object', status:number, description?: string, options?: ApiResponseOptions,) {
  return ApiGlobalOkResponse(model, type, status, description,options,);
}

export function BadRequestErrorNew <TModel extends Type<unknown>>(model: TModel, type: 'array' | 'object', status:number, description?: string, options?: ApiResponseOptions,) {
  return ApiGlobalErrorResponse(model, type, status, description,options,);
}

export function UnauthorizedErrorNew <TModel extends Type<unknown>>(model: TModel, type: 'array' | 'object', status:number, description?: string, options?: ApiResponseOptions,) {
  return ApiGlobalErrorResponse(model, type, status, description,options,);
}

export function UnprocessableEntityErrorNew <TModel extends Type<unknown>>(model: TModel, type: 'array' | 'object', status:number, description?: string, options?: ApiResponseOptions,) {
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

