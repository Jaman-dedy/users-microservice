import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { USersService } from './users.service';

@Controller()
export class UsersMicroserviceController {
  constructor(private usersService: USersService) {}

  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }

  @EventPattern('paymentCreated')
  paymentCreated(@Payload() data: any) {
    console.log('payment created :>> ', data);
  }
}
