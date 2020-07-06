import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Live } from './live.entity';
import { Repository } from 'typeorm';

@Controller('maratona')
export class MaratonaController {
  constructor(
    @InjectRepository(Live)
    private liveRepo: Repository<Live>,
  ) { }

  @Get()
  async index() {
    return this.liveRepo.find();
  }

  @Post()
  async store(@Req() request: Request) {
    const live = this.liveRepo.create(request.body as any);
    await this.liveRepo.save(live);
    return live;
  }
}
