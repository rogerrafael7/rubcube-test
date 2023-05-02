import { Module } from '@nestjs/common';
import { AdminModule } from './modules/admin/admin.module';
import { PlayerModule } from './modules/player/player.module';
import { JobModule } from './modules/job/job.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, AdminModule, PlayerModule, JobModule],
})
export class AppModule {}
