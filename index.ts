interface Person {
  name: string;
  age: number;
  ikun?: boolean;
  readonly isIkun: boolean;
}

let dylan: Person = {
  name: "dylan",
  age: 19,
  ikun: true,
  isIkun: true,
};

console.log(dylan.isIkun);

// interface定义函数类型

interface Fn {
  (name: string): string[];
}

const fn: Fn = function (name: string) {
  return [name];
};

let arr1: number[] = [1, 2, 2, 54];
let arr2: Array<number> = [1, 23, 4, 5];

interface P1 {
  name: string;
  age?: number;
}

let arr3: P1[] = [
  { name: "dylan", age: 14 },
  { name: "dylan2", age: 14 },
];

function a(...args: number[]) {
  let arg: IArguments = arguments;

  console.log(arg.length);
}

a(1, 23, 4);
