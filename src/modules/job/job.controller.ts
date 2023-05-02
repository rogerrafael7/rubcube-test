import { Controller, Post } from '@nestjs/common';
import { JobService } from './job.service';

@Controller('job')
export class JobController {
  constructor(readonly jobService: JobService) {}

  @Post('re-process-all')
  reProcessAll() {
    return this.jobService.reProcessAll();
  }
}
