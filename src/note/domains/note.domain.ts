import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class Note {

  /*constructor(texto: string, activo: boolean, id?: number) {
    this.texto = texto;
    this.activo = activo;
    this.id = id;
  }*/

  
  @IsNumber()
  @IsOptional({ message: 'id de la note'}) //Si es Opcional, poner el decorator "IsOptional" al final, si no, no funciona correctamente
  id: number;

  
  @ApiProperty({ description: 'texto de la nota' })
  @IsString()
  @IsOptional()
  texto: string;

  
  @ApiProperty({ description: 'indica si la nota está activa' })
  @IsBoolean()
  activo: boolean;

}