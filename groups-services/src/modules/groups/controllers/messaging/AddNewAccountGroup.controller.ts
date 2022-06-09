import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AddAccountInGroupService } from '../../services/AddAccountInGroup.service';
import { IAddAccountInGroup } from '../../types';

@Controller()
export class AddNewAccountGroupController {
  constructor(
    private readonly addAccountInGroupService: AddAccountInGroupService,
  ) {}

  @EventPattern('add_new_account_group')
  getNotifications(@Payload() data: IAddAccountInGroup) {
    const { group_id, account_id, name } = data;
    this.addAccountInGroupService.execute({
      account_id,
      name,
      group_id,
    });
  }
}
