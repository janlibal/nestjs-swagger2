import { Module } from '@nestjs/common'
import { AppModule } from 'src/app/app.module';
import { EmployeeModule } from 'src/employee/employee.module';
import { UserModule } from 'src/users/user.module';

@Module({
  imports: [AppModule, EmployeeModule, UserModule],
  controllers: [],
  providers: [],
})
export class GlobalModule {}
