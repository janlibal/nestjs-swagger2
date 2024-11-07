import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';

export class EmployeeDTO {
  @ApiResponseProperty()
  id?: number;

  @ApiProperty({
    description: 'The first name of a employee',
    minLength: 3,
    default: 'Amit',
  })
  firstName: string;
  
  @ApiProperty({
    description: 'The first name of a employee',
    minLength: 2,
    default: 'Gal',
  })
  lastName: string;
  
}