/*
 * @Description: Promise参数提取
 * @Author: wangfengxiang
 * @Date: 2022-11-30 07:32:12
 * @LastEditTime: 2022-11-30 08:01:34
 * @LastEditors: wangfengxiang
 */
type MyAwaited<T extends { then: any }> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  : T extends { then: (onfulfilled: (arg: infer A) => any) => any }
  ? A
  : never;

// 知识点
// inter
// 只能在条件类型里面使用
// 设置未知数 变量
