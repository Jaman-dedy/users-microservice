import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../typeorm/entities/User';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Injectable()
export class USersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }
}
