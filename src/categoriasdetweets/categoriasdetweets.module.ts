/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CategoriasdetweetsService } from './categoriasdetweets.service';
import { CreateCategoriasDeTweetController } from './categoriasdetweets.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CreateCategoriasDeTweetController],
  providers: [CategoriasdetweetsService],
})
export class CategoriasdetweetsModule {}
