export type ObjectKey = string | number | symbol;

export type EntityDict<E, Key extends ObjectKey> = {
  entities: Record<Key, E>;
  ids: Key[];
};
