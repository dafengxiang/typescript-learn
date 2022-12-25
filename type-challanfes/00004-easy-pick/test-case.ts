/*
 * @Description: 筛选需要的对象元素
 * @Author: wangfengxiang
 * @Date: 2022-11-06 21:47:12
 * @LastEditTime: 2022-12-25 08:49:51
 * @LastEditors: wangfengxiang
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}