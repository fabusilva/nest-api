import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDTO } from './dto/usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly service: UsuarioService) {}
  @Get()
  getall() {
    return this.service.getall();
  }

  @Post()
  create(@Body() dto: UsuarioDTO) {
    return this.service.create(dto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UsuarioDTO) {
    return this.service.update(dto, id);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
