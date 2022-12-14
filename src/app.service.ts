import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  lastname: string;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUser(): User {
    return {
      lastname: 'Silva',
      name: 'Stans',
    };
  }
}
