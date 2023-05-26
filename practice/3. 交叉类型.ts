interface People {
  name: string;
  age: number;
}

interface Man {
  sex: string;
}

let xiaoming: Man & People = {
  name: "dylan",
  age: 189,
  sex: "male",
};

// 类似于Man extends People之后的Man类型

console.log(xiaoming);
