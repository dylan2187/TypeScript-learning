let arr = [1, 2, 3];

function findNum(ids?: number | number[]): number[] {
  if (typeof ids == "number") {
    return arr.filter((v) => v == ids);
  } else if (Array.isArray(ids)) {
    arr.push(...ids);
    return arr;
  } else {
    return arr;
  }
}

console.log(findNum());

console.log(!!"");
