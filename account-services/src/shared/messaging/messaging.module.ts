import { Module } from '@nestjs/common';
import { RabbitMQProxy } from './rabbitmq.proxy';

@Module({
  imports: [],
  providers: [RabbitMQProxy],
  exports: [RabbitMQProxy],
})
export class MessagingModule {}
