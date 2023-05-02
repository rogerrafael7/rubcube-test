import {
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
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.jobService.processFile(file);
  }
}
