import { Injectable } from '@nestjs/common';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';
import { UpdateSeguindoDto } from './dto/update-seguindo.dto';

@Injectable()
export class SeguindoService {
  create(createSeguindoDto: CreateSeguindoDto) {
    return 'This action adds a new seguindo';
  }

  findAll() {
    return `This action returns all seguindo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seguindo`;
  }

  update(id: number, updateSeguindoDto: UpdateSeguindoDto) {
    return `This action updates a #${id} seguindo`;
  }

  remove(id: number) {
    return `This action removes a #${id} seguindo`;
  }
}
