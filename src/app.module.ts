import { Module } from '@nestjs/common';
import { AdminModule } from './modules/admin/admin.module';
import { PlayerModule } from './modules/player/player.module';
import { JobModule } from './modules/job/job.module';

@Module({
  imports: [AdminModule, PlayerModule, JobModule],
})
export class AppModule {}
