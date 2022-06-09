import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { IAddAccountInGroup } from '../types';

@Injectable()
export class AddAccountInGroupService {
  constructor(private readonly prismaService: PrismaService) {}

  public async execute({ account_id, group_id, name }: IAddAccountInGroup) {
    await this.prismaService.group_accounts.create({
      data: {
        account_id,
        group_id,
        name,
      },
    });
  }
}
