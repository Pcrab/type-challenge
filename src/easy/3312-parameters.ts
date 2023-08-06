/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #easy #infer #tuple #built-in

  ### Question

  Implement the built-in Parameters<T> generic without using it.

  For example:

  ```ts
  const foo = (arg1: string, arg2: number): void => {}

  type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
  ```

  > View on GitHub: https://tsch.js.org/3312
*/

/* _____________ Your Code Here _____________ */

type MyParameters<T extends (...args: never[]) => unknown> = T extends (
    ...args: infer P
) => unknown
    ? P
    : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type Foo = (arg1: string, arg2: number) => void;
type Bar = (arg1: boolean, arg2: { a: "A" }) => void;
type Baz = () => void;

export type cases = [
    Expect<Equal<MyParameters<Foo>, [string, number]>>,
    Expect<Equal<MyParameters<Bar>, [boolean, { a: "A" }]>>,
    Expect<Equal<MyParameters<Baz>, []>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3312/answer
  > View solutions: https://tsch.js.org/3312/solutions
  > More Challenges: https://tsch.js.org
*/
