/*
 * @Description: 获取数组第一位元素
 * @Author: wangfengxiang
 * @Date: 2022-11-26 23:48:44
 * @LastEditTime: 2022-11-27 00:33:53
 * @LastEditors: wangfengxiang
 */

// 解法一：
// type First<T extends any[]> = T extends [] ? never : T[0]
// 解法二：
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// 解法三：
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
// 解法四：(类似结构思想)
type First<T extends any[]> = T extends [infer First, ...infer rest]
  ? First
  : never;

type ages = [0, 1, 2];
// type age = ages[number]

// 知识点
// extends 类型条件判断
// 获取tuple的length属性 indexed
// extends union 判断的规则
// inter的使用，推断

// 如果是[]空数组的话返回的是undifined
