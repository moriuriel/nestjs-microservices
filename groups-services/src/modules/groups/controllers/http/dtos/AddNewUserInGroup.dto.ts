import { IsMongoId, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class AddNewUserInGroupDto {
  @IsNotEmpty()
  @IsUUID()
  group_id: string;

  @IsNotEmpty()
  @IsMongoId()
  account_id: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
