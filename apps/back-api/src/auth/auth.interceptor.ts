import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { AuthService } from './auth.service';

export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private authService: AuthService) {}

  intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const tokenArray = request.headers.authorization;

    if (tokenArray) {
      const req = this.authService.decodeToken(tokenArray.split(' ')[1]);
      if (!req) {
        return next.handle();
      }

      request.body.user = (req as { user: User }).user;
    }

    return next.handle().pipe();
  }
}
