import type { MutableEntityDict } from '../../typings';

/**
 * O(n) implementation of groupBy
 */
export const groupBy = <K extends keyof T, T extends Record<K, T[K]>>(
  key: K,
  items: T[]
) => {
  const result = { entities: {}, ids: [] } as MutableEntityDict<T, T[K]>;

  for (let i = 0; i < items.length; i++) {
    if (result.entities[items[i][key]]) {
      result.entities[items[i][key]]?.push(items[i]);
    } else {
      result.entities[items[i][key]] = [items[i]];
      result.ids.push(items[i][key]);
    }
  }

  return result;
};
