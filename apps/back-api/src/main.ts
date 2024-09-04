import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

config();

const configService = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Nest-js Stock API')
    .setDescription('Stock API with authentication and authorization')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/docs', app, document);

  await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
