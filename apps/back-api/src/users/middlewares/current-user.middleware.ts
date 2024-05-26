import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const user = await this.usersRepository.findOne({
      where: { id: +req.session.userId },
    });

    if (!user) {
      throw new NotFoundException('User Not Found');
    }

    req.currentUser = user;

    next();
  }
}
