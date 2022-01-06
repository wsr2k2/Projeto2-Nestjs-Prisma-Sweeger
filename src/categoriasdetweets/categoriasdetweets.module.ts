import { Module } from '@nestjs/common';
import { CategoriasdetweetsService } from './categoriasdetweets.service';
import { CategoriasdetweetsController } from './categoriasdetweets.controller';

@Module({
  controllers: [CategoriasdetweetsController],
  providers: [CategoriasdetweetsService]
})
export class CategoriasdetweetsModule {}
