import { onModuleInit } from 'src/service/lifecycle.service';
import { CacheModule } from '@nestjs/cache-manager';
import { MelonModule } from './melon.module';
import { CronModule } from './cron.module';
import { MainModule } from './main.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CacheModule.register(), CronModule, MainModule, MelonModule],
  controllers: [],
  providers: [onModuleInit],
})
export class AppModule {}
