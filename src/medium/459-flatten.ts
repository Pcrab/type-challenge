/*
  459 - Flatten
  -------
  by zhouyiming (@chbro) #medium #array

  ### Question

  In this challenge, you would need to write a type that takes an array and emitted the flatten array type.

  For example:

  ```ts
  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
  ```

  > View on GitHub: https://tsch.js.org/459
*/

/* _____________ Your Code Here _____________ */

type Flatten<T extends unknown[]> = T extends [infer First, ...infer Rest]
    ? First extends unknown[]
        ? [...Flatten<First>, ...Flatten<Rest>]
        : [First, ...Flatten<Rest>]
    : T extends []
    ? []
    : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

export type cases = [
    Expect<Equal<Flatten<[]>, []>>,
    Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
    Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
    Expect<
        Equal<
            Flatten<[{ foo: "bar"; 2: 10 }, "foobar"]>,
            [{ foo: "bar"; 2: 10 }, "foobar"]
        >
    >,
];

// @ts-expect-error generic type must be array
export type error = Flatten<"1">;

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/459/answer
  > View solutions: https://tsch.js.org/459/solutions
  > More Challenges: https://tsch.js.org
*/
