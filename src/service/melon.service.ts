import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type {
  IChartData,
  IKeywordChart,
  INewMusicData,
} from 'melona/dist/melon';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class MelonService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  public async melonChart(): Promise<IChartData[]> {
    const cache = await this.cacheManager.get<IChartData[]>('melonChart');
    if (!cache) {
      throw new NotFoundException(
        '캐시가 아직 생성되지 않았습니다. 잠시 후 다시 요청해주세요.',
      );
    }
    return cache;
  }

  public async melonNewMusic(): Promise<INewMusicData[]> {
    const cache = await this.cacheManager.get<INewMusicData[]>('melonNewMusic');
    if (!cache) {
      throw new NotFoundException(
        '캐시가 아직 생성되지 않았습니다. 잠시 후 다시 요청해주세요.',
      );
    }
    return cache;
  }

  public async melonKeywords(): Promise<IKeywordChart> {
    const cache = await this.cacheManager.get<IKeywordChart>('melonKeywords');
    if (!cache) {
      throw new NotFoundException(
        '캐시가 아직 생성되지 않았습니다. 잠시 후 다시 요청해주세요.',
      );
    }
    return cache;
  }
}
