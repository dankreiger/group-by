import { groupBy } from '../src';

describe('groupBy', () => {
  it('works', () => {
    expect(
      groupBy('id', [
        { id: 3, name: 'Dan' },
        { id: 2, name: 'Puppy' },
        { id: 3, name: 'woofer' },
      ])
    ).toEqual({
      entities: {
        '2': [{ id: 2, name: 'Puppy' }],
        '3': [{ id: 3, name: 'woofer' }],
      },
      ids: [3, 2, 3],
    });
  });
});
