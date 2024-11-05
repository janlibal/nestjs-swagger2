import { ApiProperty, ApiResponseProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class EmployeeDTO {
  
  @ApiResponseProperty()
  id?: number;
  
  @ApiProperty({
    description: 'The first name of a employee',
    minLength: 3,
    default: 'Joe',
  })
  @IsNotEmpty({ message: 'Firstname cannot be empty' })
  firstName: string;

  @ApiProperty({
    description: 'The first name of a employee',
    minLength: 2,
    default: 'Doe',
  })
  @IsNotEmpty({ message: 'Lastname cannot be empty' })
  lastName: string;
}