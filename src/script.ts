let name_my: string = "mehedi hasan";
const age: number = 27;

type strNum = string | number;

const con_fun = (a: strNum, b: strNum): boolean => {
  if (b > 10) {
    return true;
  } else {
    return false;
  }
};

// console.log(con_fun("mehedi",1))

interface mehedi_inter {
  name: string;
  age: number;
  honest: boolean;
}

let mehedi_hasan: mehedi_inter = {
  name: "mehedi hasan",
  age: 27,
  honest: true,
};

// console.log(mehedi_hasan)

const my_arr: (string | number)[] = ["mehedi", "rabbi", "shawon"];

my_arr.push(20);

// console.log(my_arr)

let myobj: mehedi_inter;

myobj = {
  name: "mehedi",
  age: 27,
  honest: false,
};

// console.log(myobj)

let any_arr: any[] = [];

any_arr.push("mehedi hasan");
any_arr.push(55);
any_arr.push(true);

// console.log(any_arr)

let my_fun: Function;
type h = number;
type l = boolean;

interface check {
  con: true;
}

my_fun = (a: h, b: h, d: check): h => {
  console.log(d);
  return a + b;
};

// console.log(my_fun(10,20))
// my_fun()

let sign_fun: (
  a: number,
  b: string,
  some: {
    name: string;
    age: number;
  }
) => boolean;

sign_fun = (a, b, yoyo) => {
  console.log(yoyo);
  if (a === 10) {
    return true;
  } else {
    return false;
  }
};

import { mirajul } from "./classes/classes.js";
import { forClass } from "./isplayer/isplayer.js";

let sagor: forClass;
let rabbi: forClass;

sagor = new mirajul("mehedi", 27, true);
rabbi = new mirajul("rabbi", 20, false);

// console.log(sagor);
// console.log(sign_fun(11,"hello",{name:"mehedi",age:27}))

// sagor.final_fun()

let class_type: forClass[] = [];

class_type.push(sagor);
class_type.push(rabbi);
console.log(class_type);
