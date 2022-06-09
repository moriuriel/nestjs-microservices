import { IPagination } from 'src/shared/decorators/GetPagination/GetPagination.interface';
import { Account } from '../schemas/Account.schema';
import { ICreateAccount } from '../types/users.interface';

export interface IAccountRepository {
  create(user: ICreateAccount): Promise<Account>;
  findAll(pagination: IPagination): Promise<IFindAllResponse>;
  findByEmail(email: string): Promise<Account>;
  findById(id: string): Promise<Account>;
}

export interface IFindAllResponse {
  users: Account[];
  total: number;
}
