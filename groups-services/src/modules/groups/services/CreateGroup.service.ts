import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { DATABASE_ERROR } from 'src/shared/errors/exceptions';
import { ICreateGroup } from '../types';

@Injectable()
export class CreateGroupService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute({ name, owner_id }: ICreateGroup) {
    try {
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
    } catch (error) {
      throw new DATABASE_ERROR(error);
    }
  }
}
