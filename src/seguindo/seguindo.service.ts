import { Injectable } from '@nestjs/common';
import { Seguindo, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';
import { UpdateSeguindoDto } from './dto/update-seguindo.dto';

@Injectable()
export class SeguindoService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.SeguindoCreateInput): Promise<Seguindo> {
    return await this.prisma.seguindo.create({ data });
  }

  async findAll(): Promise<Seguindo[]> {
    return await this.prisma.seguindo.findMany();
  }

  async findOne(id: number): Promise<Seguindo> {
    return await this.prisma.seguindo.findUnique({ where: { id }});
  }

  async update(id: number, data): Promise<Seguindo> {
    return await this.prisma.seguindo.update({ data, where: { id }});
  }

  async remove(id: number): Promise<Seguindo> {
    return await this.prisma.seguindo.delete({ where: { id } });
  }
}
