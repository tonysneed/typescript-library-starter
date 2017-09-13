import { Person } from './models/person.spec';

export class Dummy {
  getPerson(name: string): Person {
    return new Person(name);
  }
}
