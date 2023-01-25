import type { Equal, Expect } from "../test-utils";

type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type cases = [
  Expect<Equal<Length<tesla>, 4>>,
  Expect<Equal<Length<spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  Length<"hello world">
];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5

type Length<T extends { length: number }> = T["length"];
