type ObjectKey = string | number | symbol;

export type Dict<E> = {
  entities: Record<keyof E, E> | {};
  ids: (keyof E)[];
};

const groupBy = <K extends keyof T, T extends Record<K, T[K]>>(
  key: K,
  items: T[]
) =>
  items.reduce<Dict<T>>(
    (result, item) => ({
      ...result,
      entities: {
        ...result.entities,
        [item[key]]: [...(result.entities[item[key]] || []), item],
      },
      ids: (result.ids || []).concat([item[key]]),
    }),
    { entities: {}, ids: [] }
  );

export function createGroup<K extends ObjectKey>(key: K) {
  return function groupList<T extends Record<K, T[K]>>(items: T[]): Dict<T> {
    return groupBy(key, items);
  };
}
