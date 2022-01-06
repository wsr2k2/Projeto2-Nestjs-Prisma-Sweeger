import { Test, TestingModule } from '@nestjs/testing';
import { TweetsfavoritosService } from './tweetsfavoritos.service';

describe('TweetsfavoritosService', () => {
  let service: TweetsfavoritosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetsfavoritosService],
    }).compile();

    service = module.get<TweetsfavoritosService>(TweetsfavoritosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
