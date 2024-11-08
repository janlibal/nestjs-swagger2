import { Body, Controller, HttpStatus, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EmployeeDTO } from './dto/employee.dto';
import { ErrorDTO } from 'src/common/dto/error.dto';
import { ApiErrorDecorator } from 'src/common/decorator/error.decorator';


@Controller('/employee')
export class EmployeeController {

  @Post('/new')
  @ApiOperation({
    summary: 'Create new Employee',
    description: 'Stores an employee with firstname and lastname',
  })
  @ApiResponse({ status: 201, type: EmployeeDTO })
  @ApiErrorDecorator(HttpStatus.BAD_REQUEST, 'Bad Request', '/employee/new', 'Something went wrong')
  @ApiErrorDecorator(HttpStatus.CONFLICT, 'Already Exists', '/employee/new', 'Resource already exists')
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, 'Not Found', '/employee/new', 'Resource not found')
  @ApiErrorDecorator(HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server', '/employee/new', 'Cricial server error')
  create(@Body() employeeDto: EmployeeDTO) {
    return {...employeeDto,id:Date.now()};
  }
}