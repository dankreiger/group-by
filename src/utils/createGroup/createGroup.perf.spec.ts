import { getNItems, logPerformance } from '../../test-helpers';
import { createGroup } from './createGroup';

const ONE_THOUSAND_ITEMS = getNItems(1000);
const TEN_THOUSAND_ITEMS = getNItems(10_000);
const ONE_MILLION_ITEMS = getNItems(1_000_000);
const TEN_MILLION_ITEMS = getNItems(10_000_000);

const TEN_MILLISECONDS = 10;
const ONE_HUNDRED_MILLISECONDS = 100;
const FIVE_HUNDRED_MILLISECONDS = 500;
const ONE_SECOND = 1000;

const byAge = createGroup('age');

describe('createGroup - performance', () => {
  it('[One thousand items]: executes in less than 10ms', (done) => {
    expect(ONE_THOUSAND_ITEMS.length).toBe(1000);

    logPerformance({
      name: 'One thousand items',
      fn: () => byAge(ONE_THOUSAND_ITEMS),
      assertion: (milliseconds) => {
        expect(milliseconds).toBeLessThan(TEN_MILLISECONDS);
        global.gc?.();
        done();
      },
    });
  });

  test('[Ten thousand items]: executes in less than 100ms', (done) => {
    expect(TEN_THOUSAND_ITEMS.length).toBe(10_000);

    logPerformance({
      name: 'Ten thousand items',
      fn: () => byAge(TEN_THOUSAND_ITEMS),
      assertion: (milliseconds) => {
        expect(milliseconds).toBeLessThan(ONE_HUNDRED_MILLISECONDS);
        global.gc?.();
        done();
      },
    });
  });
  it('[One million items]: executes in less than 500ms', (done) => {
    expect(ONE_MILLION_ITEMS.length).toBe(1_000_000);

    logPerformance({
      name: 'One Million Items',
      fn: () => byAge(ONE_MILLION_ITEMS),
      assertion: (actual) => {
        expect(actual).toBeLessThan(FIVE_HUNDRED_MILLISECONDS);
        global.gc?.();
        done();
      },
    });
  });

  test('[Ten million items]: executes in less than 1s', (done) => {
    expect(TEN_MILLION_ITEMS.length).toBe(10_000_000);

    logPerformance({
      name: 'Ten Million Items',
      fn: () => byAge(TEN_MILLION_ITEMS),
      assertion: (actual) => {
        expect(actual).toBeLessThan(ONE_SECOND);
        global.gc?.();
        done();
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  });
});
