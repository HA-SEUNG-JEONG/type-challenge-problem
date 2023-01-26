import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat<["1", 2, "3"], [false, boolean, "4"]>,
      ["1", 2, "3", false, boolean, "4"]
    >
  >
];

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

//T[]나 U[] 같은 경우 특정 타입에서만 동작할 수 있기 때문에 unknown[]로 처리하는 거 같다.
