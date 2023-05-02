import { Module } from '@nestjs/common';
import { AdminModule } from './modules/admin/admin.module';
import { PlayerModule } from './modules/player/player.module';
import { JobModule } from './modules/job/job.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { resolve } from 'path';

@Module({
  imports: [
    AdminModule,
    PlayerModule,
    JobModule,
    MulterModule.register({
      storage: diskStorage({
        destination: resolve(__dirname, '..', 'uploads'),
        filename: (req, file, cb) => {
          const filename: string = uuidv4();
          const extension: string = file.originalname
            .split('.')
            .pop()
            .toLowerCase();
          cb(null, `${filename}.${extension}`);
        },
      }),
    }),
  ],
})
export class AppModule {}
