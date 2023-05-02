import { Controller, Get, Query } from '@nestjs/common';
import { StatisticsService } from '../common/statistics.service';

@Controller('player')
export class PlayerController {
  constructor(readonly statisticsService: StatisticsService) {}
  @Get('ranking')
  async getRankingPlayers(@Query('games') games: string): Promise<any> {
    return this.statisticsService.getRankingPlayersByGames(
      games ? JSON.parse(games) : [],
    );
  }
}
