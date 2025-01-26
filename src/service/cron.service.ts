import { MelonChart, MelonKeywords, MelonNewMusic } from 'melona';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @Cron(CronExpression.EVERY_HOUR)
  public async melonCache(): Promise<void> {
    try {
      // top100 chart
      const melonChart = new MelonChart();
      const chart = await melonChart.getChart();
      this.cacheManager.set('melonChart', chart, 0);
      // new music
      const melonNewMusic = new MelonNewMusic();
      const table = await melonNewMusic.getTable();
      this.cacheManager.set('melonNewMusic', table, 0);
      this.logger.log('Melon cache updated');
      // keywords
      const melonKeywords = new MelonKeywords();
      const keywords = await melonKeywords.getKeywords();
      this.cacheManager.set('melonKeywords', keywords, 0);
    } catch (err) {
      this.logger.error(err);
    }
  }
}
