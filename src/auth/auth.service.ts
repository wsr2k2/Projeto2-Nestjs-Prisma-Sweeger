import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from '@prisma/client';
import { UsuariosService } from '../usuarios/usuarios.service';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginDto) {
    const user = await this.usuariosService.findByLogin(loginUserDto);
    const token = this._createToken(user);
    return {
      nome: user.nome,
      ...token
    };
  }
  private _createToken({ nome }: LoginDto): any {
    const user: JwtPayload = { nome };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: process.env.EXPIRESIN,
      accessToken,
    }
  }
}
