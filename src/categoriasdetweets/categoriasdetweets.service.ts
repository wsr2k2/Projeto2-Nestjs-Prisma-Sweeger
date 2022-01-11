/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CategoriasDeTweet } from '@prisma/client';
import { PrismaService} from 'src/prisma/prisma.service';
import { CreateCategoriasDeTweetDto } from './dto/create-categoriasdetweet.dto';

@Injectable()
export class CategoriasdetweetsService {
  constructor(private prisma: PrismaService) {}
  
  async create(createcategoriasdetweetDto: CreateCategoriasDeTweetDto): Promise<CategoriasDeTweet> {
    return await this.prisma.categoriasDeTweet.create({ data: {...createcategoriasdetweetDto} });
  }  

  async findAll(): Promise<CategoriasDeTweet[]> {
    return await this.prisma.categoriasDeTweet.findMany();
  }

  async findOne(id: number): Promise<CategoriasDeTweet> {
    return await this.prisma.categoriasDeTweet.findUnique({ where: { id } });
  }
 
  async remove(id: number): Promise<CategoriasDeTweet> {
    return await this.prisma.categoriasDeTweet.delete({ where: { id } });
}
}
