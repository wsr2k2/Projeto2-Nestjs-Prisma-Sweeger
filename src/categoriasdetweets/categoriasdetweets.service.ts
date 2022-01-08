/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService} from 'src/prisma/prisma.service';
import { CreateCategoriasdetweetDto } from './dto/create-categoriasdetweet.dto';
import { UpdateCategoriasdetweetDto } from './dto/update-categoriasdetweet.dto';
import { Categoriasdetweet } from './entities/categoriasdetweet.entity';

@Injectable()
export class CategoriasdetweetsService {
  constructor(private prisma: PrismaService) {}
  async create(createCategoriasdetweetDto: CreateCategoriasdetweetDto): Promise<Categoriasdetweet> {
    return await this.prisma.categoriasdetweets.create({data: {...createCategoriasdetweetDto} });
  }
  

  async findAll(): Promise<Categoriasdetweet[]> {
    return await this.prisma.categoriasdetweets.findMany();
  }

  async findOne(id: number): Promise<Categoriasdetweet> {
    return await this.prisma.categoriasdetweets.findUnique({ where: { id } });
  }
 
  async remove(id: number): Promise<Categoriasdetweet> {
    return await this.prisma.categoriasdetweets.delete({ where: { id } });
}
}