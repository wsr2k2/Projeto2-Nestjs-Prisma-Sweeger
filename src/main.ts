/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API-Twitter')
    .setDescription('Projeto 02 do modulo 04 da Blue. O projeto consiste em criar uma API para controle do Twitter, onde o usurio postará tweets e terá seguidores.')
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('Usuários')
    .addTag('Tweets')
    .addTag('Seguidores')
    .addTag('Seguindo')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
