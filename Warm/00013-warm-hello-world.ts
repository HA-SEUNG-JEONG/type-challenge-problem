import { Equal, Expect, NotAny } from "../test-utils";

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];

type HelloWorld = string; // expected to be a string
