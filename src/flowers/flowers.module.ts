import { Module } from '@nestjs/common';
import { FlowersController } from './flowers.controller';
import { FlowersService } from './flowers.service';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [FlowersController],
  providers: [FlowersService, PrismaService, ConfigService]
})
export class FlowersModule { }