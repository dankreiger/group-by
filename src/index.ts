import { Dict, EntityDict, ObjectKey } from './types';

const groupBy = <K extends keyof T, T extends Record<K, T[K]>>(
  key: K,
  items: T[]
) =>
  items.reduce<EntityDict<T>>(
    (result, item) => ({
      ...result,
      entities: {
        ...result.entities,
        [item[key]]: [...(result.entities[item[key]] || []), item],
      },
      ids: [...new Set((result.ids || []).concat([item[key]]))],
    }),
    { entities: {}, ids: [] }
  );

export function createGroup<K extends ObjectKey>(key: K) {
  return function groupList<T extends Record<K, T[K]>>(
    items: T[]
  ): EntityDict<T> {
    return groupBy(key, items);
  };
}

export { EntityDict, Dict };
