import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common'
import { EmployeeService } from './employee.service'
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EmployeeDTO } from './dto/employee.dto';
import { ErrorDTO } from 'src/common/dto/error.dto';
import { ApiErrorDecorator } from 'src/common/decorator/error.decorator';
import { AlreadyExists, BadRequest, InternalError } from 'src/decorators/errors';


@Controller('/employee')
export class EmployeeController {

  @Post()
  @ApiOperation({
    summary: 'Create new Employee',
    description: 'Stores an employee with firstname and lastname',
  })
  @ApiResponse({
    status: 201,
    type: EmployeeDTO,
  })
  
  @InternalError('Internal Server Error', 'Internal Server Error Description')
  @BadRequest('Bad Request Working', 'Bad Request Description')
  @AlreadyExists('Already Exists Error', 'Already Exists Description')
  create(@Body() employeeDto: EmployeeDTO) {
    return {...employeeDto,id:Date.now()};
  }
}
