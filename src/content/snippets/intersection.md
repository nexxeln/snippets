---
title: "Intersection of Two Lists"
description: "Function that returns a list of elements that are common to two lists"
language: "TypeScript"
---

```typescript
function intersection<T>(x: T[], y: T[]): T[] {
  const frequency = x.reduce(
    (map, value) => map.set(value, (map.get(value) ?? 0) + 1),
    new Map<T, number>()
  );

  return y.filter((value) => {
    const count = frequency.get(value) ?? 0;
    frequency.set(value, count - 1);

    return count > 0;
  });
}
```

## Explanation

The `intersection` function returns the intersection, i.e. the common elements, of two lists. For example, the intersection of `[1, 2, 3]` and `[2, 3, 4]` is `[2, 3]`.

This is a TypeScript function that takes in two lists of a generic type `T` and returns a list of elements of type `T`. The `intersection` function uses the `reduce` method to create a `Map` object called `frequency`. This map stores the frequency of each element in the first list `x`. The `reduce` method iterates over the `x` list, and for each element, it checks whether the element already exists in the map. If it does, it increments the frequency of that element by 1. If it doesn't, it adds the element to the map with a frequency of 1. The `reduce` method initializes the map variable to an empty `Map` object.

Next, the function uses the `filter` method to filter out the elements in the second list `y` that are not present in the `frequency` map. The `filter` method takes a callback function that is called for each element in `y`. For each element, the function first checks if it exists in the `frequency` map. If it does, it decrements the frequency of that element by 1 and returns `true` to keep the element in the resulting list. If the element does not exist in the frequency map, it returns `false` to filter out that element from the resulting list.
