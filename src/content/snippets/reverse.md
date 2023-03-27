---
title: "Reverse A List Without Mutation"
description: "Recursive function to reverse a list without mutation"
language: "OCaml"
---

```ocaml
let rev list =
  let rec aux acc = function [] -> acc | h :: t -> aux (h :: acc) t in

  aux [] list
```

## Explanation

`rev` is an OCaml function takes a list as input. It then uses a recursive function `aux` to reverse the list. The `aux` function takes an accumulator and a list as input. `::` is the cons operator, which prepends and element to a list. Here, we use it to prepend the head of the list to the accumulator. The accumulator is then passed to the next recursive call. The base case is when the list is empty, in which case we return the accumulator. Then, we call `aux` with an empty list as the accumulator and the input list as the argument.

## Working

```
rev [1; 2; 3];;
aux [] [1; 2; 3];;
1 :: [2; 3];;
aux [1] [2; 3];;
2 :: [3];;
aux [2; 1] [3];;
3 :: [];;
aux [3; 2; 1] [];;
[3; 2; 1];;
```
