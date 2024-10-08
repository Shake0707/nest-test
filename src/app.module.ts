import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { FlowersModule } from './flowers/flowers.module';
import { LoggerMiddleware } from './conception/middleware';
import { ConfigModule } from '@nestjs/config';
import { MicroserviceModule } from './microservice/microservice.module';
import { AppConroller } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    FlowersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MicroserviceModule,
    ClientsModule.register([
      {
        name: "ORDER_SERVICE",
        transport: Transport.TCP,
        options: {
          host: "localhost",
          port: 8877
        }
      }
    ])
  ],
  controllers: [AppConroller],
  providers: [AppService]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('flowers');
  }
}
