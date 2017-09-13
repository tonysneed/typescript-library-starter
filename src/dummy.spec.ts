import { Dummy } from './dummy';

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
    const dummy = new Dummy();
    const person = dummy.getPerson('john');
    expect(person.name).toEqual('john');
  });
});
