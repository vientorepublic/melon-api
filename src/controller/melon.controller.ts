import type {
  IChartData,
  IKeywordChart,
  INewMusicData,
} from 'melona/dist/melon';
import { MelonService } from 'src/service/melon.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class MelonController {
  constructor(private readonly melonService: MelonService) {}

  @Get('chart')
  public async melonChart(): Promise<IChartData[]> {
    return this.melonService.melonChart();
  }

  @Get('newMusic')
  public async melonNewMusic(): Promise<INewMusicData[]> {
    return this.melonService.melonNewMusic();
  }

  @Get('keywords')
  public async melonKeywords(): Promise<IKeywordChart> {
    return this.melonService.melonKeywords();
  }
}
