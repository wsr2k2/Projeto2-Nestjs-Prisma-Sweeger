import { Test, TestingModule } from '@nestjs/testing';
import { TweetsfavoritosController } from './tweetsfavoritos.controller';
import { TweetsfavoritosService } from './tweetsfavoritos.service';

describe('TweetsfavoritosController', () => {
  let controller: TweetsfavoritosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TweetsfavoritosController],
      providers: [TweetsfavoritosService],
    }).compile();

    controller = module.get<TweetsfavoritosController>(TweetsfavoritosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
