import type { Equal, Expect } from "../test-utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type cases = [
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
  >
];

//@ts-ignore
type error = TupleToObject<[[1, 2], {}]>;

type TupleToObject<T extends readonly PropertyKey[]> = { [K in T[number]]: K };
