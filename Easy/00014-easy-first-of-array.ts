import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];
type f1 = [() => 123, { a: string }];

type head1 = First<arr1>;
type head2 = First<arr2>; // expected to be 3
type head3 = First<f1>;

type errors = [
  // @ts-expect-error
  First<"notArray">,
  // @ts-expect-error
  First<{ 0: "arrayLike" }>
];

type First<T extends any[]> = T extends [] ? never : T[0];
