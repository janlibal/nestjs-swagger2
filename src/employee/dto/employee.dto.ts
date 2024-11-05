import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';

export class EmployeeDTO {
  
  @ApiProperty({
    example: '/api/v1/auth/email/login'
  })
  path: string;
    
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