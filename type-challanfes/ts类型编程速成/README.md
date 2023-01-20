<!--
 * @Description: 笔记
 * @Author: wangfengxiang
 * @Date: 2023-01-20 08:24:30
 * @LastEditTime: 2023-01-20 22:10:49
 * @LastEditors: wangfengxiang
-->

# TS 类型体操速成教程

## 第一阶段

充分理解如何使用 extends、infer、as 和递归

### 字符串模版与 extends/infer，利用模版字符串定位提取字符位置并操作（demo1）

#### 判断开头

```ts
type isStartWith<
  str extends string,
  T extends string
> = str extends `${T}${infer R}` ? true : never;
```

#### 首字母大写

```ts
type firstUp<str extends string> = str extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${R}`
  : never;
```

5:09

#### 文本替换 ReplaceAll

```ts
type ReplaceOne<
  str extends string,
  from extends string,
  to extends string
> = str extends `${infer F}${from}${infer R}` ? `${F}${to}${R}` : str;
type res2 = ReplaceOne<str, "b", "p">;
```

7:00

#### 键值对转索引类型(ps：必须使用 in 对 key 进行约束)

```ts
type ConvertStrToRecord<str extends string> =
  str extends `${infer key}=${infer val}` ? { key: val } : never;
```

### as 重映射=索引的重命名

#### 索引大写

#### 获取函数索引

#### 合并索引

### 巧用递归

#### 文本替换

#### 字符串反转

### 综合 解析字符串

#### 基础

#### 升级
