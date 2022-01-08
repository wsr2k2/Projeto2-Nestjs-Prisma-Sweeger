/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Usuario, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/auth/dto/login.dto';
import { JwtPayload } from 'src/auth/jwt.strategy';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UsuarioCreateInput): Promise<Usuario> {
    data.senha = await bcrypt.hash(data.senha, 10);
    return await this.prisma.usuario.create({ data });
  }

  async findByLogin(login: LoginDto): Promise<Usuario> {
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: login.email,
      },
    });
    if (!user) {
      throw new HttpException(
        'Usuario não encontrado',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const senhaCorreta = await bcrypt.compare(login.senha, user.senha);

    if(!senhaCorreta) {
      throw new HttpException('Senha inválida', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async validateUser(payload: JwtPayload): Promise<Usuario> {
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (!user) {
      throw new HttpException('Token inválido', HttpStatus.UNAUTHORIZED);
  }
    return user;
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
