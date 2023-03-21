import { ValidationPipe } from '@nestjs/common/pipes';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Middleware to validate using Class-validator
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3002);
}
bootstrap();
