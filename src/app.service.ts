import { Injectable, NotFoundException } from '@nestjs/common';
import { Person } from './person.interface';

@Injectable()
export class AppService {

  private persons: Person[] = [];
  private idCounter = 1;

  init(): string {
    return Teste Bluelogic;
  }

  findAll(): Person[] {
    return this.persons;
  }

  findById(id: number): Person {
    return null;
  }

  save(name: string, age: number): Person {
    return null;
  }

  update(id: number, name: string, age: number): Person {
    return null;
  }

  delete(id: number): void {
    
  }
}
