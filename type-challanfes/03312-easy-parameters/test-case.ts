/*
 * @Description: 获取函数参数类型
 * @Author: wangfengxiang
 * @Date: 2023-01-02 21:25:08
 * @LastEditTime: 2023-01-02 21:50:48
 * @LastEditors: wangfengxiang
 */

import type { Equal, Expect } from '@type-challenges/utils'

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {}
const baz = (): void => {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]