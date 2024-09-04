import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ItemsModule } from './items/items.module';
import { CategoriesModule } from './categories/categories.module';
import dbconfig from './database/config';
import { CurrentUserInterceptor } from './auth/auth.interceptor';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...(dbconfig as TypeOrmModuleOptions),
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    AuthModule,
    UsersModule,
    CategoriesModule,
    ItemsModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CurrentUserInterceptor,
    },
  ],
})
export class AppModule {}
