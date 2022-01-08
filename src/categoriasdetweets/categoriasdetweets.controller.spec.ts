/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasdetweetsController } from './categoriasdetweets.controller';
import { CategoriasdetweetsService } from './categoriasdetweets.service';

describe('CategoriasdetweetsController', () => {
  let controller: CategoriasdetweetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriasdetweetsController],
      providers: [CategoriasdetweetsService],
    }).compile();

    controller = module.get<CategoriasdetweetsController>(CategoriasdetweetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
