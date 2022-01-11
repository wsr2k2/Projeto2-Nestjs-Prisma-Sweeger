/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  
  const config = new DocumentBuilder()
    .setTitle('API-Twitter') 
    .setDescription('Projeto 3 do modulo 04 da Blue. O projeto consiste em criar uma API para controle do Twitter, onde o usurio postará tweets e terá seguidores.') 
    .setVersion('2.0')
    .addTag('Auth') 
    .addTag('Usuários') 
    .addTag('Tweets') 
    .addTag('Seguidores') 
    .addTag('Seguindo') 
    .addTag('Categorias')
    .addTag('Categoria de Tweets')
    .addTag('Tweets Favoritos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);
  
  await app.listen(process.env.PORT || 3000);

}
bootstrap();
