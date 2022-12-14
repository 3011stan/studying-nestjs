import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Fernando curtiu seu comentãrio.',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}

// Inversão de dependência
// Esta classe recebe (ao invés de buscar) uma variável do tipo "AppService"
// (que é uma dependência).
// - DÚVIDA: O nest se encarrega de instanciar este controller e passar o
//   appService por baixo dos panos?
// - RESPOSTA: O Nest goza também a Injeção de dependência, que basicamente
// automatiza a injeção do "appService" no hora em qua o "AppController" é
// instanciado.
// A injeção de dependência funciona porque lá no "app.module.ts" é providenciado
// uma classe do tipo "AppService", fazendo com que o Nest consiga identificar
// a dependência, e para injetar, a classe AppService deve possuir o decorator
// @Injectable()!!!
