export type ObjectKey = string | number | symbol;

export type EntityDict<E, Key = keyof E> = {
  entities: Record<keyof E, E> | Record<never, undefined>;
  ids: Key[];
};

export type Dict<T> = keyof T extends string
  ? Partial<{
      [K in `by${Capitalize<keyof T>}`]: EntityDict<T>;
    }>
  : never;
