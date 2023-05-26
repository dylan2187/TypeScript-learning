interface User {
  name: string;
  age: number;
}

function fun(user: User) {
  return user;
}

console.log(fun({ name: "wangkai", age: 14 }));

//this

interface Obj {
  user: number[];
  add: (this: Obj, num: number) => void;
}

let obj: Obj = {
  user: [1, 2, 3, 4],
  add(this: Obj, num: number) {
    this.user.push(num);
  },
};

obj.add(55);
console.log(obj.user);
