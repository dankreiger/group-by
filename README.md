# groop

Normalize an array of objects by a property.

## Usage

```ts
import { createGroup } from '@dankreiger/groop';

const listGroup = [
  { name: 'Dan', age: 5 },
  { name: 'Puppy', age: 5 },
  { name: 'Woofer', age: 22 },
  { name: 'Dan', age: 20 },
];

const byAge = createGroup('age');

byAge(listGroup);

/** yields **/

{
  entities: {
    '20': [
      {
        age: 20,
        name: 'Dan',
      },
    ],
    '22': [
      {
        age: 22,
        name: 'Woofer',
      },
    ],
    '5': [
      {
        age: 5,
        name: 'Dan',
      },
      {
        age: 5,
        name: 'Puppy',
      },
    ],
  },
  ids: [5, 22, 20],
}
```
