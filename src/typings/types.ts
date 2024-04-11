export type ObjectKey = string | number | symbol;

export type EntityDict<Entity, Key extends ObjectKey> = {
  entities: Record<Key, ReadonlyArray<Entity> | undefined>;
  ids: ReadonlyArray<Key>;
};

export type MutableEntityDict<Entity, Key extends ObjectKey> = {
  entities: Record<Key, Entity[] | undefined>;
  ids: Key[];
};
