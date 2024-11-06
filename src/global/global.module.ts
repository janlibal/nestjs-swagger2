import { Module } from '@nestjs/common'
import { EmployeeModule } from 'src/employee/employee.module'

@Module({
  imports: [EmployeeModule],
  controllers: [],
  providers: [],
})
export class GlobalModule {}
