import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesteModule } from './teste/teste.module';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioModule } from './usuario/usuario.module';
import { LivroModule } from './livro/livro.module';

@Module({
  imports: [TesteModule, UsuarioModule, LivroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
