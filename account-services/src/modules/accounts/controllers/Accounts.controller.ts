import { Body, Controller, HttpStatus, Post, Response } from '@nestjs/common';
import { Response as ExpressResponse } from 'express';

import { CreateAccountDto } from '../dtos';
import { CreateAccountService } from '../services';

@Controller('/accounts')
export class AccountController {
  constructor(private readonly createAccountService: CreateAccountService) {}

  @Post()
  async create(
    @Body() data: CreateAccountDto,
    @Response() response: ExpressResponse,
  ) {
    const account = await this.createAccountService.execute(data);

    return response.status(HttpStatus.CREATED).json({ account });
  }
}
