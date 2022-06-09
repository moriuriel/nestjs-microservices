import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  IsUUID,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class GroupDto {
  @IsString()
  @IsUUID()
  id: string;

  @IsNumber()
  code: string;
}

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ValidateNested()
  @Type(() => GroupDto)
  group: GroupDto;
}
