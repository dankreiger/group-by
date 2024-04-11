import { type ArrayEntityDict } from '../../../typings';

/**
 * O(n^2) implementation of groupBy
 */
export const groupArrayBySlow = <K extends keyof T, T extends Record<K, T[K]>>(
  key: K,
  items: T[]
) =>
  items.reduce<ArrayEntityDict<T, T[K]>>(
    (result, item) => ({
      ...result,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      entities: {
        // @ts-expect-error - not using it
        ...result.entities,
        [item[key]]: [result.entities[item[key]] || [], item].flat(),
      },
      ids: [...new Set((result.ids || []).concat([item[key]]))],
    }),
    // @ts-expect-error - not using it
    { entities: {}, ids: [] }
  );
