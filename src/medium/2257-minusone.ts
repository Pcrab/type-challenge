/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math

  ### Question

  Given a number (always positive) as a type. Your type should return the number decreased by one.

  For example:

  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```

  > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */

type ParseInt<T extends string> = T extends `${infer Int extends
    | number
    | bigint}`
    ? Int
    : never;
type ReverseString<T extends string> = T extends `${infer Char}${infer Rest}`
    ? `${ReverseString<Rest>}${Char}`
    : T;

type InternalMinusOne<T extends string> = T extends `${infer First extends
    number}${infer Rest}`
    ? First extends 0
        ? Rest extends "1"
            ? "9"
            : `9${InternalMinusOne<Rest>}`
        : `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][First]}${Rest}`
    : never;
type InternalPlusOne<T extends string> = T extends `${infer First extends
    number}${infer Rest}`
    ? First extends 9
        ? Rest extends ""
            ? "01"
            : `0${InternalPlusOne<Rest>}`
        : `${[1, 2, 3, 4, 5, 6, 7, 8, 9][First]}${Rest}`
    : never;

type MinusOne<T extends number | bigint> = T extends 0
    ? -1
    : `${T}` extends `-${infer Digit extends number}`
    ? ParseInt<`-${ReverseString<InternalPlusOne<ReverseString<`${Digit}`>>>}`>
    : ParseInt<ReverseString<`${InternalMinusOne<ReverseString<`${T}`>>}`>>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

export type cases = [
    Expect<Equal<MinusOne<1>, 0>>,
    Expect<Equal<MinusOne<55>, 54>>,
    Expect<Equal<MinusOne<3>, 2>>,
    Expect<Equal<MinusOne<100>, 99>>,
    Expect<Equal<MinusOne<1101>, 1100>>,
    Expect<Equal<MinusOne<0>, -1>>,
    Expect<Equal<MinusOne<-9>, -10>>,
    Expect<Equal<MinusOne<9_007_199_254_740_992n>, 9_007_199_254_740_991>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/
