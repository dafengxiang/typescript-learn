type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// JS 解决方案
function myPick(todo, keys) {
  const obj = {};
  keys.forEach((key) => {
    if (key in todo) obj[key] = todo[key];
  });
  return obj;
}

// 返回对象
// 遍历 mepped
// todo[key]取值 indexed
// 看看是否在todo里
//   keyof  lookup
