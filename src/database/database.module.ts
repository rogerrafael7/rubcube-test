import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environment';

@Module({
  imports: [MongooseModule.forRoot(environment.MONGO_DSN)],
})
export class DatabaseModule {}
