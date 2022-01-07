/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Categoriasdetweets, Prisma } from '@prisma/client';
import { PrismaService} from 'src/prisma/prisma.service';
import { CreateCategoriasdetweetDto } from './dto/create-categoriasdetweet.dto';
import { UpdateCategoriasdetweetDto } from './dto/update-categoriasdetweet.dto';

@Injectable()
export class CategoriasdetweetsService {
  constructor(private prisma: PrismaService) {}
  async create(createCategoriasdetweetDto: CreateCategoriasdetweetDto): Promise<Categoriasdetweets> {
    return await this.prisma.categoriasdetweet.create({data: {...createCategoriasdetweetDto} });
  }
  }

  async findAll(): Promise<Categoriasdetweets[]>{
    return await this.prisma.categoriasdetweets.findMany();
  }

  async findOne(id: number): Promise<Categoriasdetweets> {
    return await this.prisma.categoriasdetweet.findUnique({ where: { id } });
  }

  async update(id: number, updateCategoriasdetweetDto): Promise<Categoriasdetweets> {
    return await this.prisma.categoriasdetweets.update({ data, where: { id }});
  }

  async remove(id: number): Promise<Categoriasdetweets> {
    return await this.prisma.categoriasdetweet.delete({ where: { id } });
}
