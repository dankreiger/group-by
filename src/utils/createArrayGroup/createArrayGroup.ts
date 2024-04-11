import type { ArrayEntityDict, ObjectKey } from '../../typings';
import { groupArrayBy } from '../__internal__';

export function createArrayGroup<K extends ObjectKey>(key: K) {
  return function groupList<T extends Record<K, T[K]>>(
    items: ReadonlyArray<T>
  ): ArrayEntityDict<T, T[K]> {
    return groupArrayBy(key, items);
  };
}
