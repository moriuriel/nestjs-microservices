import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { ICreateGroup } from '../types';

@Injectable()
export class CreateGroupService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute({ name, owner_id }: ICreateGroup) {
    const group = await this.prismaService.groups.create({
      data: {
        name,
        owner_id,
        code: Math.floor(Math.random() * 90000) + 10000,
      },
    });

    return {
      code: Number(group.code),
      ...group,
    };
  }
}
