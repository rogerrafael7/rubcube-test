import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../../environment';
import { LogRepo } from './log.repo';
import { Log, LogSchema } from './log.schema';

@Module({
  imports: [
    MongooseModule.forRoot(environment.MONGO_DSN),
    MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }]),
  ],
  providers: [LogRepo],
  exports: [LogRepo],
})
export class DatabaseModule {}
