import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

import configuration from '../config/configuration';

@Injectable()
export class RabbitMQProxy {
  static buildRabbitMQConnection(queueName: string): ClientProxy {
    const url = `amqp://${configuration().rabbitMq.user}:${
      configuration().rabbitMq.pass
    }@${configuration().rabbitMq.uri}:${configuration().rabbitMq.port}`;
    console.log(url);
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [url],
        queue: queueName,
      },
    });
  }
}
