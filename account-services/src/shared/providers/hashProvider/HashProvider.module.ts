import { Module } from '@nestjs/common';
import { BcryptProvider } from './implementations';

@Module({
  providers: [BcryptProvider],
  exports: [BcryptProvider],
})
export class HashProvider {}
