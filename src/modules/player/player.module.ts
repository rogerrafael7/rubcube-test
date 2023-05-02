import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';

@Module({
  imports: [],
  controllers: [PlayerController],
  providers: [],
})
export class PlayerModule {}
