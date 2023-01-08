/*
 * @Description: 删除结构中对应键值对
 * @Author: wangfengxiang
 * @Date: 2023-01-08 20:30:17
 * @LastEditTime: 2023-01-08 21:58:15
 * @LastEditors: wangfengxiang
 */
type MyOmit<T, K extends keyof T> = {
    [key in Exclude<keyof T,K>]: T[key]
}