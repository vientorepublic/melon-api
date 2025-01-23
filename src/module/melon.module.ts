import { MelonController } from 'src/controller/melon.controller';
import { MelonService } from 'src/service/melon.service';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';

@Module({
  imports: [CacheModule.register()],
  controllers: [MelonController],
  providers: [MelonService],
})
export class MelonModule {}
