import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HashProvider } from 'src/shared/providers/hashProvider/HashProvider.module';
import { AccountController } from './controllers/Accounts.controller';
import { AccountRepository } from './repositories';
import { Account, AccountSchema } from './schemas/Account.schema';
import { CreateAccountService } from './services';
import { RabbitMQProxy } from 'src/shared/messaging/rabbitmq.proxy';

@Module({
  imports: [
    HashProvider,
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
  controllers: [AccountController],
  providers: [
    {
      provide: 'add_new_account_group',
      useFactory: () => {
        return RabbitMQProxy.buildRabbitMQConnection('add_new_account_group');
      },
    },
    AccountRepository,
    CreateAccountService,
  ],
})
export class AccountsModule {}
