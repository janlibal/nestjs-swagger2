import { Module } from '@nestjs/common'
import { AppModule } from 'src/app/app.module';
import { EmployeeModule } from 'src/employee/employee.module';
import { NoteModule } from 'src/note/note.module';
import { UserModule } from 'src/users/user.module';

@Module({
  imports: [UserModule], //[AppModule, EmployeeModule, UserModule, NoteModule],
  controllers: [],
  providers: [],
})
export class GlobalModule {}
