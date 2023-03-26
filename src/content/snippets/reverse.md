---
title: "Reverse A List Without Mutation"
description: "OCaml function to reverse a list without mutation"
tags: ["OCaml", "FP"]
---

```ocaml
let rev list =
  let rec aux acc = function [] -> acc | h :: t -> aux (h :: acc) t in

  aux [] list
```