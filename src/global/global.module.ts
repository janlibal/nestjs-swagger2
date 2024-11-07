import { Module } from '@nestjs/common'
import { AppModule } from 'src/app/app.module';

@Module({
  imports: [AppModule],
  controllers: [],
  providers: [],
})
export class GlobalModule {}
