/*
  3192 - Reverse
  -------
  by jiangshan (@jiangshanmeta) #medium #tuple

  ### Question

  Implement the type version of ```Array.reverse```

  For example:

  ```typescript
  type a = Reverse<['a', 'b']> // ['b', 'a']
  type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
  ```

  > View on GitHub: https://tsch.js.org/3192
*/

/* _____________ Your Code Here _____________ */

export type Reverse<T extends unknown[]> = T extends [
    infer First,
    ...infer Rest,
]
    ? [...Reverse<Rest>, First]
    : T;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

export type cases = [
    Expect<Equal<Reverse<[]>, []>>,
    Expect<Equal<Reverse<["a", "b"]>, ["b", "a"]>>,
    Expect<Equal<Reverse<["a", "b", "c"]>, ["c", "b", "a"]>>,
];

export type errors = [
    // @ts-expect-error string is not array
    Reverse<"string">,
    // @ts-expect-error object is not array
    Reverse<{ key: "value" }>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3192/answer
  > View solutions: https://tsch.js.org/3192/solutions
  > More Challenges: https://tsch.js.org
*/
