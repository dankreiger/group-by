type Dict<E> = {
  entities: Record<keyof E, E> | {};
  ids: (keyof E)[];
};

export const groupBy = <K extends keyof T, T extends Record<K, T[K]>>(
  key: K,
  items: T[]
) =>
  items.reduce<Dict<T>>(
    (result, item) => ({
      ...result,
      entities: {
        ...result.entities,
        [item[key]]: [...(result[item[key]] || []), item],
      },
      ids: (result.ids || []).concat([item[key]]),
    }),
    { entities: {}, ids: [] }
  );
