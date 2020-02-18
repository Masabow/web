import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';

export default function route(app:INestApplication) {
  // サーバーサイドのルーティングを/apiで始まるURLのみに適用
  app.setGlobalPrefix('api');

  // /apiから始まらないURLの場合はクライアントサイドのルーティングを適用
  const clientPath = __dirname + '/../public';
  console.log(clientPath);
  app.use(express.static(clientPath));

  // Swaggerを/api/docにて使用する
  const options = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);
}