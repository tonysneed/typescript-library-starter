import { Dummy } from './dummy';
import { Person } from './models/person.spec';

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('DummyClass is instantiable', () => {
    expect(new Dummy()).toBeInstanceOf(Dummy);
  });

  it('getPerson should return a new Person', () => {
    const person = new Person('john');
    const result = new Dummy().getPerson('john');
    expect(result.name).toEqual(person.name);
  });
});
