import { Module } from '@nestjs/common';
import { TesteService } from './teste.service';
import { TesteRepository } from './repository/teste';
import { PrismaModule } from '../prisma/prisma.module';
import { TesteController } from './teste.controller';

@Module({
  imports: [PrismaModule],
  providers: [TesteService, TesteRepository],
  controllers: [TesteController],
})
export class TesteModule {}
