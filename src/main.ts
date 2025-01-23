import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './module/app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.disable('x-powered-by');
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
