import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { DATABASE_ERROR } from 'src/shared/errors/exceptions';
import { IAddAccountInGroup } from '../types';

@Injectable()
export class AddAccountInGroupService {
  constructor(private readonly prismaService: PrismaService) {}

  public async execute({ account_id, group_id, name }: IAddAccountInGroup) {
    try {
      await this.prismaService.group_accounts.create({
        data: {
          account_id,
          group_id,
          name,
        },
      });
    } catch (error) {
      throw new DATABASE_ERROR(error);
    }
  }
}
