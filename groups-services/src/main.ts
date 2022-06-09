import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://admin:admin@localhost:5672'],
      queue: 'add_new_account_group',
    },
  });

  app.useGlobalPipes(new ValidationPipe());

  app.startAllMicroservices().then(() => {
    console.log('[Groups] Microservice running');
  });

  await app.listen(3000);
}
bootstrap();
