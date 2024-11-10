import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponse {

    @ApiProperty({description:'codigo de error'})
    statusCode: number;

    @ApiProperty({description:'descripcion del error'})
    message: string;

}