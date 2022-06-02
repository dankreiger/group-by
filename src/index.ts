type ObjectKey = string | number | symbol;

export type EntityDict<E> = {
  entities: Record<keyof E, E> | {};
  ids: (keyof E)[];
};

export type Dict<T> = keyof T extends string
  ? Partial<{
      [K in `by${Capitalize<keyof T>}`]: EntityDict<T>;
    }>
  : never;

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
      ids: (result.ids || []).concat([item[key]]),
    }),
    { entities: {}, ids: [] }
  );

export function createGroup<K extends ObjectKey>(key: K) {
  return function groupList<T extends Record<K, T[K]>>(items: T[]): EntityDict<T> {
    return groupBy(key, items);
  };
}
