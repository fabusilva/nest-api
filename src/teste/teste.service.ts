import { Injectable } from '@nestjs/common';
import { TesteRepository } from './repository/teste';
import { TesteDTO } from './dto/teste.dto';

@Injectable()
export class TesteService {
  constructor(private readonly testeRepository: TesteRepository) {}

  async create(testeDTO: TesteDTO) {
    return this.testeRepository.create(testeDTO);
  }

  async get() {
    return this.testeRepository.get();
  }

  async update(id: string, testeDTO: TesteDTO) {
    return this.testeRepository.update(id, testeDTO);
  }

  async delete(id: string) {
    return this.testeRepository.delete(id);
  }

  async findByName(nome: string) {
    return this.testeRepository.findByName(nome);
  }
}
