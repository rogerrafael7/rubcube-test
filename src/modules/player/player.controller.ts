import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { StatisticsService } from '../common/statistics.service';

@Controller('player')
export class PlayerController {
  constructor(readonly statisticsService: StatisticsService) {}
  @Get('ranking')
  async getRankingPlayers(@Query('games') games: string): Promise<any> {
    if (games && !/^[\[{].*[\]}]$/.test(games)) {
      throw new HttpException('Invalid games param', 400);
    }
    return this.statisticsService.getRankingPlayersByGames(
      games ? JSON.parse(games) : [],
    );
  }
}
