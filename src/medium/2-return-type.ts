/*
  2 - Get Return Type
  -------
  by Anthony Fu (@antfu) #medium #infer #built-in

  ### Question

  Implement the built-in `ReturnType<T>` generic without using it.

  For example

  ```ts
  const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }

  type a = MyReturnType<typeof fn> // should be "1 | 2"
  ```

  > View on GitHub: https://tsch.js.org/2
*/

/* _____________ Your Code Here _____________ */

type MyReturnType<T extends (...args: never[]) => unknown> = T extends (
    ...args: never[]
) => infer R
    ? R
    : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type ComplexObject = {
    a: [12, "foo"];
    bar: "hello";
    prev(): number;
};

type Fn = (v: boolean) => 1 | 2;
type Fn1 = (v: boolean, w: unknown) => 1 | 2;

export type cases = [
    Expect<Equal<string, MyReturnType<() => string>>>,
    Expect<Equal<123, MyReturnType<() => 123>>>,
    Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
    Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
    Expect<Equal<() => "foo", MyReturnType<() => () => "foo">>>,
    Expect<Equal<1 | 2, MyReturnType<Fn>>>,
    Expect<Equal<1 | 2, MyReturnType<Fn1>>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2/answer
  > View solutions: https://tsch.js.org/2/solutions
  > More Challenges: https://tsch.js.org
*/
