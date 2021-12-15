import { Module } from '@nestjs/common';
import { SeguindoService } from './seguindo.service';
import { SeguindoController } from './seguindo.controller';

@Module({
  controllers: [SeguindoController],
  providers: [SeguindoService]
})
export class SeguindoModule {}
