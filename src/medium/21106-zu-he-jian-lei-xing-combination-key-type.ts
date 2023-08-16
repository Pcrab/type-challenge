/*
  21106 - Combination key type
  -------
  by Nauxscript (@Nauxscript) #medium

  ### Question

  1. Combine multiple modifier keys, but the same modifier key combination cannot appear.
  2. In the `ModifierKeys` provided, the priority of the previous value is higher than the latter value; that is, `cmd ctrl` is OK, but `ctrl cmd` is not allowed.

  > View on GitHub: https://tsch.js.org/21106
*/

/* _____________ Your Code Here _____________ */

type Two<One extends string, Strs extends string[]> = Strs extends [
    infer First extends string,
    ...infer Rest extends string[],
]
    ? `${One} ${First}` | Two<One, Rest>
    : never;

// 实现 Combs
type Combs<T extends string[]> = T extends [
    infer First extends string,
    ...infer Rest extends string[],
]
    ? Two<First, Rest> | Combs<Rest>
    : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type ModifierKeys = ["cmd", "ctrl", "opt", "fn"];
type CaseTypeOne =
    | "cmd ctrl"
    | "cmd opt"
    | "cmd fn"
    | "ctrl opt"
    | "ctrl fn"
    | "opt fn";

export type cases = [Expect<Equal<Combs<ModifierKeys>, CaseTypeOne>>];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/21106/answer
  > View solutions: https://tsch.js.org/21106/solutions
  > More Challenges: https://tsch.js.org
*/
