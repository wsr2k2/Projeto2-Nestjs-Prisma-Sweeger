import { Injectable } from '@nestjs/common';
import { CreateCategoriasdetweetDto } from './dto/create-categoriasdetweet.dto';
import { UpdateCategoriasdetweetDto } from './dto/update-categoriasdetweet.dto';

@Injectable()
export class CategoriasdetweetsService {
  create(createCategoriasdetweetDto: CreateCategoriasdetweetDto) {
    return 'This action adds a new categoriasdetweet';
  }

  findAll() {
    return `This action returns all categoriasdetweets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriasdetweet`;
  }

  update(id: number, updateCategoriasdetweetDto: UpdateCategoriasdetweetDto) {
    return `This action updates a #${id} categoriasdetweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriasdetweet`;
  }
}
