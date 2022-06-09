import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/shared/database/databse.module';
import { AddNewAccountGroupController, GroupsController } from './controllers';
import { AddAccountInGroupService, CreateGroupService } from './services';

@Module({
  imports: [DatabaseModule],
  controllers: [AddNewAccountGroupController, GroupsController],
  providers: [AddAccountInGroupService, CreateGroupService],
})
export class GroupsModule {}
