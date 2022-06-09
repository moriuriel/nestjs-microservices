import {
  Body,
  Controller,
  HttpStatus,
  Injectable,
  Post,
  Response,
} from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
import { CreateGroupService } from '../../services';
import { CreateGroupDto } from './dtos';

@Controller('/groups')
@Injectable()
export class GroupsController {
  constructor(private readonly createGroupService: CreateGroupService) {}
  @Post()
  async create(
    @Body() data: CreateGroupDto,
    @Response() response: ExpressResponse,
  ): Promise<ExpressResponse> {
    const group = await this.createGroupService.execute(data);

    return response.status(HttpStatus.CREATED).json(group);
  }
}
