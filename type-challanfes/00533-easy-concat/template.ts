type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

// 课后作业
type first<T> = T extends [infer F, ...infer L] ? F : never;
type last<T> =  T extends [...infer F, infer L] ? L : never;
