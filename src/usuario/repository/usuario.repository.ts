import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioDTO } from '../dto/usuario.dto';

@Injectable()
export class UsuarioRepository {
  constructor(private readonly primaService: PrismaService) {}

  getall() {
    return this.primaService.usuario.findMany();
  }

  create(usuarioDTO: UsuarioDTO) {
    return this.primaService.usuario.create({ data: usuarioDTO });
  }

  update(id: string, dto: UsuarioDTO) {
    return this.primaService.usuario.update({ where: { id: id }, data: dto });
  }

  delete(id: string) {
    return this.primaService.usuario.delete({ where: { id: id } });
  }
}
