import { Injectable } from '@nestjs/common';
import { Person } from './person.interface';

@Injectable()
export class AppService {

    private persons: Person[] = [];
    private idCounter = 1;

    init(): string {
        return "Hello World"
    }

    findAll(): Person[] {
        return this.persons;
    }

    findById(id: number): Person {
        const person = this.persons.find((p) => p.id === id)
        return person;
    }

    save(name: string, age: number): Person {
        const newPerson: Person = {
            id: this.idCounter++,
            name: name,
            age: age
        }

        this.persons.push(newPerson);
        return newPerson;
    }

    update(id: number, name: string, age: number): Person {
        const person = this.persons.find((p) => p.id === id)
        if (person) {
            person.name = name;
            person.age = age;
            return person;
        }

        return null;
    }

    delete(id: number): void {
        const index = this.persons.findIndex((p) => p.id === id)
        if (index) {
            this.persons.splice(index, 1);
        }
        return;
    }
}
