import { ScheduleModule } from '@nestjs/schedule';
import { Module } from '@nestjs/common';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [],
  providers: [],
})
export class CronModule {}
