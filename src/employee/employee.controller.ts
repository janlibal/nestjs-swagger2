import { Body, Controller, HttpStatus, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { EmployeeDTO } from './dto/employee.dto'
import { ErrorDTO } from 'src/common/dto/error.dto'
import { ApiErrorDecorator } from 'src/common/decorator/error/error.decorator'
import { BadRequest, InternalError } from 'src/decorators/error'

@Controller('employee')
@ApiTags('employee')
export class EmployeeController {
  @Post()
  @ApiOperation({
    summary: 'Create new Employee',
    description: 'Saves an employee with first name and last name',
  })
  @ApiResponse({
    status: 201,
    type: EmployeeDTO,
  })
  @InternalError('Internal Server Error', 'Internal Server Error Description')
  @BadRequest('Bad Request Working', 'Bad Request Description')
  createEmployee(@Body() employeeDto: EmployeeDTO) {
    return {
      firstName: employeeDto.firstName,
      lastName: employeeDto.lastName,
      id: Date.now(),
    }
  }
}
