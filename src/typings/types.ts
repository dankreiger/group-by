export type ObjectKey = string | number | symbol;

export type EntityDict<Entity, Key extends ObjectKey> = {
  entities: Record<Key, Entity | undefined>;
  ids: Key[];
};
