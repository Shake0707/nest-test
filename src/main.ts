import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT);
  console.log("HTTP app is listening on port " + PORT);

  // const microserviceApp = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  //   transport: Transport.TCP,
  //   options: {
  //     host: "localhost",
  //     port: 8877
  //   }
  // });

  // await microserviceApp.listen();
  // console.log("Microservice is listening on port 8877");
}

bootstrap();
