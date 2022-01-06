import { PartialType } from '@nestjs/swagger';
import { CreateTweetsfavoritoDto } from './create-tweetsfavorito.dto';

export class UpdateTweetsfavoritoDto extends PartialType(CreateTweetsfavoritoDto) {}
