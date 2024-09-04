import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(data: CreateUserDto) {
    const user = this.usersRepository.create(data);

    return this.usersRepository.save(user);
  }

  findOne(email: string) {
    return this.usersRepository.findOneBy({ email });
  }
}
