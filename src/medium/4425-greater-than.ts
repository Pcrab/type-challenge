/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #medium #array

  ### Question

  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

  Negative numbers do not need to be considered.

  For example

  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  GreaterThan<10, 100> //should be false
  GreaterThan<111, 11> //should be true
  ```

  Good Luck!

  > View on GitHub: https://tsch.js.org/4425
*/

/* _____________ Your Code Here _____________ */

export type GreaterEQLenString<
    SGreater extends string,
    SSmaller extends string,
> = SGreater extends `${infer GreaterFirst}${infer GreaterRest}`
    ? SSmaller extends `${infer SmallerFirst}${infer SmallerRest}`
        ? GreaterFirst extends SmallerFirst
            ? GreaterEQLenString<GreaterRest, SmallerRest>
            : "9876543210" extends `${string}${GreaterFirst}${string}${SmallerFirst}${string}`
            ? true
            : false
        : never
    : false;

export type GreaterThanString<
    SLong extends string,
    SShort extends string,
    SLongOrigin extends string = SLong,
    SShortOrigin extends string = SShort,
> = SLong extends `${infer _}${infer LongRest}`
    ? SShort extends `${infer _}${infer ShortRest}`
        ? GreaterThanString<LongRest, ShortRest, SLongOrigin, SShortOrigin>
        : true
    : SShort extends `${infer _}${infer _}`
    ? false
    : GreaterEQLenString<SLongOrigin, SShortOrigin>;

export type GreaterThan<T extends number, U extends number> = GreaterThanString<
    `${T}`,
    `${U}`
>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

export type cases = [
    Expect<Equal<GreaterThan<1, 0>, true>>,
    Expect<Equal<GreaterThan<5, 4>, true>>,
    Expect<Equal<GreaterThan<4, 5>, false>>,
    Expect<Equal<GreaterThan<0, 0>, false>>,
    Expect<Equal<GreaterThan<10, 9>, true>>,
    Expect<Equal<GreaterThan<20, 20>, false>>,
    Expect<Equal<GreaterThan<10, 100>, false>>,
    Expect<Equal<GreaterThan<111, 11>, true>>,
    Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4425/answer
  > View solutions: https://tsch.js.org/4425/solutions
  > More Challenges: https://tsch.js.org
*/
