---
title: "Reverse A List Without Mutation"
tags: ["OCaml", "FP"]
---

```ocaml
let rev list =
  let rec aux acc = function [] -> acc | h :: t -> aux (h :: acc) t in

  aux [] list
```