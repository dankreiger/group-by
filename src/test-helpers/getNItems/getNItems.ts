/* eslint-disable @typescript-eslint/no-explicit-any */

import { TEN_ITEMS } from '../__fixtures__';

/* eslint-disable @typescript-eslint/no-unsafe-return */
export const getNItems = (count: number) =>
  Array.from({ length: count / TEN_ITEMS.length }).flatMap(() => TEN_ITEMS);
