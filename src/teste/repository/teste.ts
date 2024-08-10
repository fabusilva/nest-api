import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TesteDTO } from '../dto/teste.dto';

@Injectable()
export class TesteRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(testeDTO: TesteDTO) {
    return this.prisma.usuario.create({ data: testeDTO });
  }

  get() {
    return this.prisma.usuario.findMany();
  }

  update(id: string, testeDTO: TesteDTO) {
    return this.prisma.usuario.update({
      where: { id: id },
      data: testeDTO,
    });
  }

  delete(id: string) {
    return this.prisma.usuario.delete({
      where: { id: id },
    });
  }

  findByName(nome: string) {
    return this.prisma.usuario.findMany({
      where: { nome: nome },
    });
  }
}
