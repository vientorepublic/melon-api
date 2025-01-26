import { MelonChart, MelonKeywords, MelonNewMusic } from 'melona';
import { Inject, Logger, OnModuleInit } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

export class onModuleInit implements OnModuleInit {
  private logger = new Logger(onModuleInit.name);
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  private async initCache(): Promise<void> {
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
  }

  public onModuleInit(): void {
    this.logger.log('Initalization task started');
    this.initCache();
  }
}
