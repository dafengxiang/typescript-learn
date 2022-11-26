/*
 * @Description: 获取元组长度
 * @Author: wangfengxiang
 * @Date: 2022-11-27 00:27:41
 * @LastEditTime: 2022-11-27 00:39:18
 * @LastEditors: wangfengxiang
 */
type Length<T extends readonly any[]> = T["length"]


// 知识点：
// 什么是tuple类型
// 数组另外一种类型，详细描述了每一个位置上的类型（定长）
// tuple和普通的数组有什么区别