/*
 * @Description: 字符串模版与 extends/infer
 * @Author: wangfengxiang
 * @Date: 2023-01-20 08:25:06
 * @LastEditTime: 2023-01-20 22:09:51
 * @LastEditors: wangfengxiang
 */
type str = "beyond";
type getFirst<T> = T extends `${infer F}${infer R}` ? F : never;

// 获取开头
type res = getFirst<str>;

// 制定截取
type str2<T> = T extends `${infer F}y${infer R}` ? F : never;

// 判断开头
type isStartWith<
  str extends string,
  T extends string
> = str extends `${T}${infer R}` ? true : never;

// 首字母大写
type firstUp<str extends string> = str extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${R}`
  : never;

// 文本替换
type ReplaceOne<
  str extends string,
  from extends string,
  to extends string
> = str extends `${infer F}${from}${infer R}` ? `${F}${to}${R}` : str;
type res2 = ReplaceOne<str, "b", "p">;

// 键值对转索引类型(必须使用 in 对key进行约束)
type ConvertStrToRecord<str extends string> =
  str extends `${infer key}=${infer val}` ? { [k in key]: val } : never;
type res3 = ConvertStrToRecord<"name=lilei">;
