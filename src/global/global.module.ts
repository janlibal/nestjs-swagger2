import { Module } from '@nestjs/common'
import { UserModule } from 'src/users/user.module';

@Module({
  imports: [UserModule], //[AppModule, EmployeeModule, UserModule, NoteModule],
  controllers: [],
  providers: [],
})
export class GlobalModule {}
