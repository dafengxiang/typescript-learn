/*
 * @Description: 排除重复值
 * @Author: wangfengxiang
 * @Date: 2022-11-28 22:16:32
 * @LastEditTime: 2022-11-28 22:37:21
 * @LastEditors: wangfengxiang
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]