/*
 * @Description: if运算测试
 * @Author: wangfengxiang
 * @Date: 2022-11-29 22:52:15
 * @LastEditTime: 2022-11-29 23:07:31
 * @LastEditors: wangfengxiang
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>