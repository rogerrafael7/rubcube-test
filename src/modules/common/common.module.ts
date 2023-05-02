import { Module } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [StatisticsService],
  exports: [StatisticsService],
})
export class CommonModule {}
