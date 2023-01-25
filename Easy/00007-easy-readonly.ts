import type { Equal, Expect } from "../test-utils";

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed?: boolean;
  meta?: {
    author: string;
  };
}

const toDo: MyReadonly<Todo1> = {
  title: "jey",
  description: "foobar",
};

type MyReadonly<T> = { readonly [K in keyof T]: T[K] };
