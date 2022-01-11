/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Seguidores, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSeguidorDto } from './dto/create-seguidore.dto';

@Injectable()
export class SeguidoresService {
  constructor(private prisma: PrismaService) {}

  async create(createSeguidorDto: CreateSeguidorDto): Promise<Seguidores> {
    return await this.prisma.seguidores.create({ data: { ...createSeguidorDto}});
  }

  async findAll(): Promise<Seguidores[]> {
    return await this.prisma.seguidores.findMany();
  }

  async findOne(id: number): Promise<Seguidores> {
    return await this.prisma.seguidores.findUnique({ where: { id } });
  }

  async remove(id: number): Promise<Seguidores> {
    return await this.prisma.seguidores.delete({ where: { id } });
  }
}
