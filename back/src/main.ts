import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import route from './route';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  route(app);
  await app.listen(4200);
}
bootstrap();
