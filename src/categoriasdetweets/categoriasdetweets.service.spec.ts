/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasdetweetsService } from './categoriasdetweets.service';

describe('CategoriasdetweetsService', () => {
  let service: CategoriasdetweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriasdetweetsService],
    }).compile();

    service = module.get<CategoriasdetweetsService>(CategoriasdetweetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
