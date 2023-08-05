/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in #union

  ### Question

  Implement the built-in `Exclude<T, U>`

  > Exclude from `T` those types that are assignable to `U`

  For example:

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > View on GitHub: https://tsch.js.org/43
*/

/* _____________ Your Code Here _____________ */

// distributive conditional types https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
// T = "a" | "b" | "c"
// U = "a"
// -> "a" extends "a" ? never : "a" -> never
// -> "b" extends "a" ? never : "b" -> "b"
// -> "c" extends "a" ? never : "c" -> "c"
// -> "b" | "c"
type MyExclude<T, U> = T extends U ? never : T;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

export type cases = [
    Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
    Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
    Expect<
        Equal<
            // eslint-disable-next-line @typescript-eslint/ban-types
            MyExclude<string | number | (() => void), Function>,
            string | number
        >
    >,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/43/answer
  > View solutions: https://tsch.js.org/43/solutions
  > More Challenges: https://tsch.js.org
*/
