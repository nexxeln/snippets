---
title: "Intersection of Two Lists"
description: "Function that returns the intersection of two lists"
language: "TypeScript"
---

```typescript
const intersection = <T>(x: T[], y: T[]): T[] => [...new Set(y)].filter((v) => new Set(x).has(v));
```

## Explanation

`intersection` is a function that takes two lists as input. It then uses the `Set` constructor to create a set from each list. The `Set` constructor removes duplicates from the list. It then uses the `filter` method to filter out elements that are not in the first set. The `has` method returns a boolean indicating whether the set contains the element. The `filter` method returns a new array with the elements that pass the test.

## Working

```ts
intersection([1, 2, 3, 2, 5, 3], [2, 2, 2, 2, 4, 5]);;
// sets created  [2, 3, 5] [2, 4, 5]
// filtered [2, 5]
// [2, 5]
```