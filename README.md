# groop

Normalize an array of objects by a property.

## Usage

```ts
import { groupBy } from '@dankreiger/groop';

groupBy('id', [
  { id: 3, name: 'Dan' },
  { id: 2, name: 'Puppy' },
  { id: 3, name: 'woofer' },
]);

/** yields:
{
  entities: {
    '2': [{ id: 2, name: 'Puppy' }],
    '3': [{ id: 3, name: 'woofer' }],
  },
  ids: [3, 2, 3],
}
*/
```
