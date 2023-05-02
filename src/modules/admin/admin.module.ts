import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [AdminController],
  providers: [],
})
export class AdminModule {}
