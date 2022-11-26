import type { EntityDict, ObjectKey } from '../../typings';
import { groupBy } from '../_internal';

export function createGroup<K extends ObjectKey>(key: K) {
  return function groupList<T extends Record<K, T[K]>>(
    items: T[]
  ): EntityDict<T, T[K]> {
    return groupBy(key, items);
  };
}
