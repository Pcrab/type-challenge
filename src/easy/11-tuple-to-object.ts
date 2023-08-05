/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #easy #object-keys

  ### Question

  Given an array, transform it into an object type and the key/value must be in the provided array.

  For example:

  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```

  > View on GitHub: https://tsch.js.org/11
*/

/* _____________ Your Code Here _____________ */

// 需要修改 any[] 为 (string | number | symbol)[] 来限制 key 的类型
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [key in T[number]]: key;
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "../utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const tupleMix = [1, "2", 3, "4"] as const;

export type cases = [
    Expect<
        Equal<
            TupleToObject<typeof tuple>,
            {
                tesla: "tesla";
                "model 3": "model 3";
                "model X": "model X";
                "model Y": "model Y";
            }
        >
    >,
    Expect<
        Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>
    >,
    Expect<
        Equal<
            TupleToObject<typeof tupleMix>,
            { 1: 1; "2": "2"; 3: 3; "4": "4" }
        >
    >,
];

// @ts-expect-error typecheck
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type error = TupleToObject<[[1, 2], Record<string, never>]>;

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/11/answer
  > View solutions: https://tsch.js.org/11/solutions
  > More Challenges: https://tsch.js.org
*/
