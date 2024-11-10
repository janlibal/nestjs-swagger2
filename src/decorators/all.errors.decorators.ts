import { HttpStatus } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';
import { ApiErrorDecorator } from 'src/common/decorator/error.decorator';


export function BadRequestError(title: string,path: string,detail: string, description?: string, options?: ApiResponseOptions,) {
  return ApiErrorDecorator(HttpStatus.BAD_REQUEST,title,path,detail, description,options,);
}

export function ConflictError(title: string,path: string,detail: string, description?: string, options?: ApiResponseOptions,) {
  return ApiErrorDecorator(HttpStatus.CONFLICT,title,path,detail, description,options,);
}

  export function NotFoundError(title: string,path: string,detail: string,  description?: string, options?: ApiResponseOptions,) {
  return ApiErrorDecorator(HttpStatus.NOT_FOUND,title,path,detail, description,options,);
}

  export function InternalServer(title: string,path: string,detail: string,description?: string, options?: ApiResponseOptions,) {
  return ApiErrorDecorator(HttpStatus.INTERNAL_SERVER_ERROR,title,path,detail, description,options,);
}
