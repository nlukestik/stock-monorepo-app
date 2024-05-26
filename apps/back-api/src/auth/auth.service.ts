import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/user.entity';
import { JwtService } from '@nestjs/jwt';

export type LoginJWTPayload = {
  email: string;
  sub: number;
};

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.findOne(email);

    if (!user) {
      throw new NotFoundException('User Not Found');
    }

    const isSamePassword = await bcrypt.compare(password, user.password);

    if (!isSamePassword) {
      throw new UnauthorizedException();
    }

    const { password: userPassword, ...result } = user;
    return result;
  }

  async signup({ email, password }: CreateUserDto) {
    const hash = await bcrypt.hash(password, 10);
    const user = await this.usersService.create({ email, password: hash });

    if (!user) {
      throw new BadRequestException();
    }

    const { password: userPassword, ...result } = user;
    return result;
  }

  async login(user: Partial<User>) {
    const currentUser = await this.usersService.findOne(user.email);

    const payload: LoginJWTPayload = {
      email: currentUser.email,
      sub: currentUser.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  decodeToken(token: string) {
    return this.jwtService.decode(token);
  }
}
