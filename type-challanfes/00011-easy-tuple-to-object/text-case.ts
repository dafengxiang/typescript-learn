/*
 * @Description:
 * @Author: wangfengxiang
 * @Date: 2022-11-25 09:08:38
 * @LastEditTime: 2022-11-26 23:39:49
 * @LastEditors: wangfengxiang
 */
import type { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const tupleMix = [1, "2", 3, "4"] as const;



type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<
    Equal<TupleToObject<typeof tupleMix>, { 1: 1; "2": "2"; 3: 3; "4": "4" }>
  >
];


// 期望下面类型报错
// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

// 知识点
// 1.typeof把js世界里的东西转换成ts世界东西
// 2.字面量类型：
// let str = '123' as const
// type str = typeof str

// 遍历array   T[number]
