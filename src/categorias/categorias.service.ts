/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Categoria, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    return await this.prisma.categoria.create({ data: { ...createCategoriaDto} });
  }

  async findAll(): Promise<Categoria[]> {
    return await this.prisma.categoria.findMany();
  }

  async findOne(id: number): Promise<Categoria> {
    return await this.prisma.categoria.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateCategoriaDto): Promise<Categoria> {
    return await this.prisma.categoria.update({ data, where: { id } });
  }

  async remove(id: number): Promise<Categoria> {
    return await this.prisma.categoria.delete({ where: { id } });
  }
}
