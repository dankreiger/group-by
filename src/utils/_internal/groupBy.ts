import type { EntityDict } from '../../typings';

export const groupBy = <K extends keyof T, T extends Record<K, T[K]>>(
  key: K,
  items: T[]
) =>
  items.reduce<EntityDict<T, T[K]>>(
    (result, item) => ({
      ...result,
      entities: {
        ...result.entities,
        [item[key]]: [result.entities[item[key]] || [], item].flat(),
      },
      ids: [...new Set((result.ids || []).concat([item[key]]))],
    }),
    { entities: {}, ids: [] }
  );
