import { type ReadonlyDeep } from 'type-fest';
export type ObjectKey = string | number | symbol;

export type ArrayEntityDict<Entity, Key extends ObjectKey> = {
  readonly entities: ReadonlyDeep<
    Record<Key, ReadonlyArray<Entity> | undefined>
  >;
  readonly ids: ReadonlyArray<Key>;
};

export type EntityDict<Entity, Key extends ObjectKey> = {
  readonly entities: ReadonlyDeep<Record<Key, Entity | undefined>>;
  readonly ids: ReadonlyArray<Key>;
};

// --------------------------------------------------------------
export type MutableArrayEntityDict<Entity, Key extends ObjectKey> = {
  entities: Record<Key, Entity[] | undefined>;
  ids: Key[];
};
export type MutableEntityDict<Entity, Key extends ObjectKey> = {
  entities: Record<Key, Entity | undefined>;
  ids: Key[];
};
