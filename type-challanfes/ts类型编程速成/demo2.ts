/*
 * @Description: as 重映射=索引的重命名
 * @Author: wangfengxiang
 * @Date: 2023-01-20 21:51:35
 * @LastEditTime: 2023-01-20 22:30:30
 * @LastEditors: wangfengxiang
 */

interface B {
  aaa: 1;
  bbb: 2;
}

type UpperKeys<R extends Record<string, any>> = {
  [K in keyof B as Uppercase<K>]: B[K];
};
type res9 = UpperKeys<B>;
