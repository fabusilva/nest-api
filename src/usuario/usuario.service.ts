import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from './repository/usuario.repository';
import { UsuarioDTO } from './dto/usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly repository: UsuarioRepository) {}
  getall() {
    return this.repository.getall();
  }
  create(usuarioDTO: UsuarioDTO) {
    return this.repository.create(usuarioDTO);
  }
  update(dto: UsuarioDTO, id: string) {
    return this.repository.update(id, dto);
  }
  delete(id: string) {
    return this.repository.delete(id);
  }
}
