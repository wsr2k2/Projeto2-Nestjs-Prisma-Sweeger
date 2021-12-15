import { Module } from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';
import { SeguidoresController } from './seguidores.controller';

@Module({
  controllers: [SeguidoresController],
  providers: [SeguidoresService]
})
export class SeguidoresModule {}
