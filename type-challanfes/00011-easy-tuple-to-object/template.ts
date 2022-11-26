// type TupleToObject<T extends readonly any[]> = any
type TupleToObject<T extends readonly any[]> = {
  [k in T[number]]: k;
};
