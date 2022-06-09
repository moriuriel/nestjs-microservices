import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GroupsModule } from './modules/groups/groups.module';
import configuration from './shared/config/configuration';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration] }), GroupsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
