import { Injectable } from '@nestjs/common';
import { Seguidores, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSeguidorDto } from './dto/create-seguidore.dto';
import { UpdateSeguidorDto } from './dto/update-seguidore.dto';

@Injectable()
export class SeguidoresService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.SeguidoresCreateInput): Promise<Seguidores> {
    return await this.prisma.seguidores.create({ data });
  }

  async findAll(): Promise<Seguidores[]> {
    return await this.prisma.seguidores.findMany();
  }

  async findOne(id: number): Promise<Seguidores> {
    return await this.prisma.seguidores.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateSeguidorDto): Promise<Seguidores> {
    return await this.prisma.seguidores.update({ data, where: { id } });
  }

  async remove(id: number): Promise<Seguidores> {
    return await this.prisma.seguidores.delete({ where: { id } });
  }
}
