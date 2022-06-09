import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import configuration from './shared/config/configuration';
import { HttpExceptionFilter } from './shared/errors/http-exception.filter';
import { logger } from './shared/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const url = `amqp://${configuration().rabbitMq.user}:${
    configuration().rabbitMq.pass
  }@${configuration().rabbitMq.uri}:${configuration().rabbitMq.port}`;

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [url],
      queue: 'add_new_account_group',
    },
  });

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalFilters(new HttpExceptionFilter());

  app.startAllMicroservices().then(() => {
    logger.log('[Groups] Microservice running');
  });

  await app.listen(3000);
}
bootstrap();
