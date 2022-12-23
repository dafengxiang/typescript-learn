/*
 * @Description: 合并数组
 * @Author: wangfengxiang
 * @Date: 2022-12-23 21:44:11
 * @LastEditTime: 2022-12-23 22:04:32
 * @LastEditors: wangfengxiang
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,

// 课后作业
  Expect<Equal<first<[1, 2]>, 1>>,
  Expect<Equal<last<[1, 2]>, 2>>,
]