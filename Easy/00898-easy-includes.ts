// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

// type tests = Includes<[1, 2, 3, 5, 6, 7], 7>;

type cases = [
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">, true>
  >,
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">, false>
  >,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: "A" }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: "A" }], { readonly a: "A" }>, false>>,
  Expect<Equal<Includes<[{ readonly a: "A" }], { a: "A" }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>
];

type Includes<T extends unknown[], U> = T extends [infer First, ...infer Rest] // T가 첫 번째 요소 First와 나머지 요소 Rest를 가진 배열인지 확인하는 조건부 타입으로 정의됩니다.
  ? Equal<First, U> extends true // First와 U가 같은지 확인해서
    ? true //같으면 true
    : Includes<Rest, U> //아니면 Includes를 재귀적으로 호출해서
  : false; //나머지 부분인 Rest까지 확인했을 때 같지 않으면 최종적으로 false 리턴

type test = Equal<boolean, true>;
