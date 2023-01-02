/*
 * @Description: 数组末尾添加元素
 * @Author: wangfengxiang
 * @Date: 2023-01-02 20:55:15
 * @LastEditTime: 2023-01-02 20:57:54
 * @LastEditors: wangfengxiang
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]