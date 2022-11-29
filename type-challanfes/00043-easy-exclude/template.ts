/*
 * @Description: 排除重复值
 * @Author: wangfengxiang
 * @Date: 2022-11-28 22:16:04
 * @LastEditTime: 2022-11-28 22:36:44
 * @LastEditors: wangfengxiang
 */
type MyExclude<T, U> = T extends U ? never : T


// 知识点
// 两边都是union类型时，会每一个去遍历比较返回值（T表示当前遍历值）