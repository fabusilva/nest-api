import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TesteService } from './teste.service';
import { TesteDTO } from './dto/teste.dto';

@Controller('teste')
export class TesteController {
  constructor(private readonly testeService: TesteService) {}

  @Post()
  async create(@Body() testeDTO: TesteDTO) {
    return this.testeService.create(testeDTO);
  }

  @Get()
  async get() {
    return this.testeService.get();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() testeDTO: TesteDTO) {
    return this.testeService.update(id, testeDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.testeService.delete(id);
  }

  @Get('nome/:nome')
  async findByName(@Param('nome') nome: string) {
    return this.testeService.findByName(nome);
  }
}
