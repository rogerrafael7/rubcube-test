import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [PlayerController],
  providers: [],
})
export class PlayerModule {}
