import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];

type MyExclude<T, U> = T extends U ? never : T; //T가 U에 할당될 수 있는지 검사하고 할당 가능하다면 그 원소를 생략합니다.
