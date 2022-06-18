import {
  Body,
  Controller,
  HttpStatus,
  Injectable,
  Post,
  Response,
} from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
import { AddAccountInGroupService } from '../../services';
import { AddNewUserInGroupDto } from './dtos';

@Injectable()
@Controller('')
export class AddNewUserInGroupController {
  constructor(
    private readonly addNewUserInGroupService: AddAccountInGroupService,
  ) {}

  @Post()
  async create(
    @Body() data: AddNewUserInGroupDto,
    @Response() response: ExpressResponse,
  ): Promise<ExpressResponse> {
    const userAdded = await this.addNewUserInGroupService.execute(data);

    return response.status(HttpStatus.CREATED).json(userAdded);
  }
}
