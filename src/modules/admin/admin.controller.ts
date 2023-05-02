import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { StatisticsService } from '../common/statistics.service';

@Controller('admin')
export class AdminController {
  constructor(readonly adminService: StatisticsService) {}
  @Get('stats/games')
  async getStatisticsByGames(@Query('games') games: string): Promise<any> {
    if (games && !/^[\[{].*[\]}]$/.test(games)) {
      throw new HttpException('Invalid games param', 400);
    }
    return this.adminService.getStatisticsByGames(
      games ? JSON.parse(games) : [],
    );
  }
}
