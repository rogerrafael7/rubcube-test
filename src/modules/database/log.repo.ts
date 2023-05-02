import { Log } from './log.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LogRepo {
  constructor(
    @InjectModel(Log.name)
    readonly model: Model<Log>,
  ) {}
}
