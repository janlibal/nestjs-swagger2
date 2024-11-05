import { HttpStatus } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';
import { ApiErrorDecorator } from 'src/common/decorator/error/error.decorator';

export function BadRequest(
  message: string,
  description?: string,
  path?: string,
  options?: ApiResponseOptions,
) {
  return ApiErrorDecorator(
    HttpStatus.BAD_REQUEST,
    message,
    description,
    path,
    options,
  );
}
export function InternalError(
  message: string,
  description?: string,
  path?:string,
  options?: ApiResponseOptions,
) {
  return ApiErrorDecorator(
    HttpStatus.INTERNAL_SERVER_ERROR,
    message,
    description,
    path,
    options,
  );
}