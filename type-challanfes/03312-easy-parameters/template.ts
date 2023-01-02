/*
 * @Description: 获取函数参数类型
 * @Author: wangfengxiang
 * @Date: 2023-01-02 21:24:55
 * @LastEditTime: 2023-01-02 21:50:27
 * @LastEditors: wangfengxiang
 */
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer X
) => any
  ? X
  : never;

// 知识点：
// infer和extends结合使用

// 参考：https://github.com/microsoft/Typescript/pull/24897
