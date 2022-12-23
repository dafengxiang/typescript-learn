/*
 * @Description: 数组是否包含元素
 * @Author: wangfengxiang
 * @Date: 2022-12-23 22:06:23
 * @LastEditTime: 2022-12-24 07:57:51
 * @LastEditors: wangfengxiang
 */
import { Equal } from "@type-challenges/utils";
export type Includes<T extends readonly any[], U> = T extends [
  infer F,
  ...infer Rest
]
  ? Equal<F, U> extends true
    ? true
    : Includes<Rest, U>
  : false;


// 知识点：
// 1.递归实现遍历数组
// 2.ts模块实现
// -如果有export/import的话，那么就是模块
// -如果没有的话那么就是全局的，可以直接在别的模块引用