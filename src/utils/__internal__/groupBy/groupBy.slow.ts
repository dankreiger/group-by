import type { EntityDict } from '../../../typings';

/**
 * O(n^2) implementation of groupBy
 */
export const groupBySlow = <K extends keyof T, T extends Record<K, T[K]>>(
  key: K,
  items: T[]
) =>
  items.reduce<EntityDict<T, T[K]>>(
    (result, item) => ({
      ...result,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      entities: {
        // @ts-expect-error - not using it
        ...result.entities,
        [item[key]]: item,
      },
      ids: [...new Set((result.ids || []).concat([item[key]]))],
    }),
    { entities: {}, ids: [] } as unknown as EntityDict<T, T[K]>
  );
