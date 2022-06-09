import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IPagination } from 'src/shared/decorators/GetPagination/GetPagination.interface';
import { Account } from '../schemas/Account.schema';
import { ICreateAccount } from '../types/users.interface';
import {
  IFindAllResponse,
  IAccountRepository,
} from './AccountRepository.interface';

@Injectable()
export class AccountRepository implements IAccountRepository {
  constructor(
    @InjectModel(Account.name) private accountRespository: Model<Account>,
  ) {}

  async create(user: ICreateAccount): Promise<Account> {
    return this.accountRespository.create(user);
  }

  async findAll({ limit, page }: IPagination): Promise<IFindAllResponse> {
    const total = await this.accountRespository.count();

    const users = await this.accountRespository
      .find()
      .limit(limit)
      .skip((page - 1) * limit);

    return { total, users };
  }

  async findByEmail(email: string): Promise<Account> {
    return this.accountRespository.findOne({ email });
  }

  async findById(id: string): Promise<Account> {
    return this.accountRespository.findOne({ _id: new Types.ObjectId(id) });
  }
}
