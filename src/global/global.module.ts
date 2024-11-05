import { Module } from '@nestjs/common'
import { AppModule } from 'src/app/app.module';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [AppModule, EmployeeModule],
  controllers: [],
  providers: [],
})
export class GlobalModule {}
