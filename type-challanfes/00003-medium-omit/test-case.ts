/*
 * @Description: 删除结构中键值对
 * @Author: wangfengxiang
 * @Date: 2023-01-08 20:30:30
 * @LastEditTime: 2023-01-08 21:59:58
 * @LastEditors: wangfengxiang
 */


import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}