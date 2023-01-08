/*
 * @Description: 获取函数返回参数
 * @Author: wangfengxiang
 * @Date: 2023-01-08 20:11:48
 * @LastEditTime: 2023-01-08 20:26:44
 * @LastEditors: wangfengxiang
 */
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;



// 知识点：
// infer设置返回值参数限制
// 剩余参数设置入参限制