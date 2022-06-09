import { IPagination } from 'src/shared/decorators/GetPagination/GetPagination.interface';
import { Account } from '../schemas/Account.schema';

export interface IGroup {
  id: string;
  code: string;
}

export interface ICreateAccount {
  name: string;
  email: string;
  password: string;
  group?: IGroup;
}

export interface IFindAllAccountResponse {
  pagination: IPagination;
  users: Account[];
}
