import { Module } from '@nestjs/common';
import { MaratonaController } from './maratona.controller';
import { Live } from './live.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Live])],
  controllers: [MaratonaController]
})
export class MaratonaModule { }
