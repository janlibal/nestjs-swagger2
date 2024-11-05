import { ErrorDTO } from 'src/common/dto/error.dto';
import { EmployeeDTO } from './dto/employee.dto';
import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiErrorDecorator } from 'src/common/decorator/error/error.decorator';
import { BadRequest, InternalError } from 'src/decorators/error/error.types.decorator';


@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  
  
  @ApiOperation({
    summary: 'Create new Employee',
    description: 'Lorem ipsum ....',
  })
  @ApiResponse({
    status: 201,
    type: EmployeeDTO,
  })
  @InternalError('Internal Server Error', 'Internal Server Error Description')
  @BadRequest('Bad Request Working', 'Bad Request Description')
  @Post()
  createEmployee(@Body() employeeDto: EmployeeDTO) {
    return { 
      firstName: employeeDto.firstName,
      lastName: employeeDto.lastName
    };
  }
}
