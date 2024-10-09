import { Body, Controller, Get, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { FlowersService } from './flowers.service';
// import { ParceIntPipe } from 'src/conception/parceInt.pipe';
import { AuthGuard } from 'src/conception/auth.guard';
import { LoggingInterceptor } from 'src/conception/logging.interceptor';
import { CreateFlowersDto } from './flowers.dto';

@Controller('flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) { }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.flowersService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() dto: CreateFlowersDto) {
    return this.flowersService.crate(dto);
  }
}
