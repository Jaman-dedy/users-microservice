import { Module } from '@nestjs/common';
import { UsersMicroserviceController } from './users.controller';
import { USersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeorm/entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersMicroserviceController],
  providers: [USersService],
})
export class UsersModule {}
