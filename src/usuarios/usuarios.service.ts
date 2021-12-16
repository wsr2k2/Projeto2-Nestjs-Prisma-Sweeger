import { Injectable } from '@nestjs/common';
import { Usuario, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UsuarioCreateInput): Promise<Usuario> {
    return await this.prisma.usuario.create({ data });
  }

  async findAll(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany();
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.prisma.usuario.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateUsuarioDto): Promise<Usuario> {
    return await this.prisma.usuario.update({ data, where: { id } });
  }

  async remove(id: number): Promise<Usuario> {
    return await this.prisma.usuario.delete({ where: { id } });
  }
}
