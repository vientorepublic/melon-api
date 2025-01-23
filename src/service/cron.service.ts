import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { MelonChart, MelonNewMusic } from 'melona';
import { Cache } from 'cache-manager';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @Cron(CronExpression.EVERY_HOUR)
  public async melonCache(): Promise<void> {
    try {
      const melonChart = new MelonChart();
      const chart = await melonChart.getChart();
      this.cacheManager.set('melonChart', chart, 0);
      const melonNewMusic = new MelonNewMusic();
      const table = await melonNewMusic.getTable();
      this.cacheManager.set('melonNewMusic', table, 0);
    } catch (err) {
      this.logger.error(err);
    }
  }
}
