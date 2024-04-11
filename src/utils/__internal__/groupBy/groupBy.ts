import { EntityDict, MutableEntityDict } from '../../../typings';

/**
 * O(n) implementation of groupBy
 */
export const groupBy = <K extends keyof T, T extends Record<K, T[K]>>(
  key: K,
  items: ReadonlyArray<T>
) => {
  const result = { entities: {}, ids: [] } as MutableEntityDict<T, T[K]>;

  for (let i = 0; i < items.length; i++) {
    const _item = items[i];
    result.entities[_item[key]] = _item[key];
  }

  return result as unknown as EntityDict<T, T[K]>;
};
