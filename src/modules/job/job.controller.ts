import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { JobService } from './job.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('job')
export class JobController {
  constructor(readonly jobService: JobService) {}

  @Post('process-file')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { removeAll: 'true' | 'false' },
  ) {
    const removeAll =
      body?.removeAll === 'true' ? true : body?.removeAll !== 'false';
    return this.jobService.processFile(file, removeAll);
  }
}
