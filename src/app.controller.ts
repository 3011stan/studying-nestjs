import { Controller, Get } from '@nestjs/common';
import { AppService, User } from './app.service';

@Controller('app')
export class AppController {
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
  constructor(private readonly appService: AppService) {}

  @Get('hello-route')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('rota-ola-mundo')
  getTest(): string {
    return 'Olá mundo!';
  }

  @Get('user')
  getUser(): User {
    return this.appService.getUser();
  }
}
