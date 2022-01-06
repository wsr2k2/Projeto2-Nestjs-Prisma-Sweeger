/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('API-Twitter') // local onde pode ser colocado o nome do projeto
    .setDescription('Projeto 02 do modulo 04 da Blue. O projeto consiste em criar uma API para controle do Twitter, onde o usurio postará tweets e terá seguidores.') // pequena descrição do projeto
    .setVersion('1.0') // versão do projeto
    .addTag('Auth') // tag para agrupar os endpoints
    .addTag('Usuários') // tag para agrupar os endpoints
    .addTag('Tweets') // tag para agrupar os endpoints
    .addTag('Seguidores') // tag para agrupar os endpoints
    .addTag('Seguindo') // tag para agrupar os endpoints
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

}
bootstrap();
