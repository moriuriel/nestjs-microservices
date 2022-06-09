import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { BcryptProvider } from 'src/shared/providers/hashProvider/implementations';

import { Account } from '../schemas/Account.schema';
import { IAccountRepository, AccountRepository } from '../repositories';
import { ICreateAccount } from '../types';
import { DATABASE_ERROR } from 'src/shared/errors/exceptions';

@Injectable()
export class CreateAccountService {
  constructor(
    @Inject(BcryptProvider)
    private readonly bcryptProvider: BcryptProvider,
    @Inject(AccountRepository)
    private readonly accountRepository: IAccountRepository,
    @Inject('add_new_account_group')
    private rabbitMQClient: ClientProxy,
  ) {}

  async execute({
    email,
    name,
    password,
    group,
  }: ICreateAccount): Promise<Account> {
    const hashedPassword = await this.bcryptProvider.generateHash(password);

    try {
      const user = await this.accountRepository.create({
        email,
        name,
        password: hashedPassword,
      });

      if (group) {
        const groupPayload = {
          group_id: group.id,
          code: group.code,
          account_id: user._id,
          name: user.name,
        };

        this.rabbitMQClient.emit('add_new_account_group', groupPayload);
      }

      return user;
    } catch (error) {
      throw new DATABASE_ERROR(error);
    }
  }
}
