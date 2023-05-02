import { Controller, Get, Query } from '@nestjs/common';
import { StatisticsService } from '../common/statistics.service';

@Controller('admin')
export class AdminController {
  constructor(readonly adminService: StatisticsService) {}
  @Get('statistics')
  async getStatisticsByGames(@Query('games') games: string): Promise<any> {
    return this.adminService.getStatisticsByGames(
      games ? JSON.parse(games) : [],
    );
  }
}
