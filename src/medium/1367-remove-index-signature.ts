/*
  1367 - Remove Index Signature
  -------
  by hiroya iizuka (@hiroyaiizuka) #medium #object-keys

  ### Question

  Implement `RemoveIndexSignature<T>` , exclude the index signature from object types.

  For example:

  ```ts
  type Foo = {
    [key: string]: any
    foo(): void
  }

  type A = RemoveIndexSignature<Foo> // expected { foo(): void }
  ```

  > View on GitHub: https://tsch.js.org/1367
*/

/* _____________ Your Code Here _____________ */

type RemoveIndexSignature<T extends object> = {
    [key in keyof T as true extends Equal<key, string>
        ? never
        : true extends Equal<key, symbol>
        ? never
        : true extends Equal<key, number>
        ? never
        : key]: T[key];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type Foo = {
    [key: string]: unknown;
    foo(): void;
};

type Bar = {
    [key: number]: unknown;
    bar(): void;
    0: string;
};

const foobar = Symbol("foobar");
type FooBar = {
    [key: symbol]: unknown;
    [foobar](): void;
};

type Baz = {
    bar(): void;
    baz: string;
};

export type cases = [
    Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
    Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
    Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
    Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1367/answer
  > View solutions: https://tsch.js.org/1367/solutions
  > More Challenges: https://tsch.js.org
*/
