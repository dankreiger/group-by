import type { EntityDict, ObjectKey } from '../../typings';
import { groupBy } from '../__internal__';

export function createGroup<K extends ObjectKey>(key: K) {
  return function groupItem<T extends Record<K, T[K]>>(
    items: ReadonlyArray<T>
  ): EntityDict<T, T[K]> {
    return groupBy(key, items);
  };
}
