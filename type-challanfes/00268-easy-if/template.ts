/*
 * @Description: if运算
 * @Author: wangfengxiang
 * @Date: 2022-11-29 22:52:01
 * @LastEditTime: 2022-11-29 23:06:57
 * @LastEditors: wangfengxiang
 */
type If<C extends boolean, T, F> = C extends true ? T : F


// 知识点
// 类型兼容｜分配规则
// null在严格模式和非严格模式的区别
// https://www.typescriptlang.org/docs/handbook/type-compatibility.html