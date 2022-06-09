import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from './shared/config/configuration';
import { HttpExceptionFilter } from './shared/errors/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appPort = configuration().port;

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(appPort, () => {
    console.log(`ACCOUNTS SERVICES IS RUNNING ON PORT ${appPort}`);
  });
}
bootstrap();
