import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountsModule } from './modules/accounts/accounts.module';
import configuration from './shared/config/configuration';
import { DatabaseModule } from './shared/database/database.module';
import { HashProvider } from './shared/providers/hashProvider/HashProvider.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    DatabaseModule,
    HashProvider,
    AccountsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
