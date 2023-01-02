/*
 * @Description: 数组首位添加元素
 * @Author: wangfengxiang
 * @Date: 2023-01-02 20:58:28
 * @LastEditTime: 2023-01-02 20:59:09
 * @LastEditors: wangfengxiang
 */

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]