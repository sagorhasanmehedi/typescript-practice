let name_my = "mehedi hasan";
const age = 27;
const con_fun = (a, b) => {
    if (b > 10) {
        return true;
    }
    else {
        return false;
    }
};
let mehedi_hasan = {
    name: "mehedi hasan",
    age: 27,
    honest: true,
};
// console.log(mehedi_hasan)
const my_arr = ["mehedi", "rabbi", "shawon"];
my_arr.push(20);
// console.log(my_arr)
let myobj;
myobj = {
    name: "mehedi",
    age: 27,
    honest: false,
};
// console.log(myobj)
let any_arr = [];
any_arr.push("mehedi hasan");
any_arr.push(55);
any_arr.push(true);
// console.log(any_arr)
let my_fun;
my_fun = (a, b, d) => {
    console.log(d);
    return a + b;
};
// console.log(my_fun(10,20))
// my_fun()
let sign_fun;
sign_fun = (a, b, yoyo) => {
    console.log(yoyo);
    if (a === 10) {
        return true;
    }
    else {
        return false;
    }
};
import { mirajul } from "./classes/classes.js";
let sagor;
let rabbi;
sagor = new mirajul("mehedi", 27, true);
rabbi = new mirajul("rabbi", 20, false);
// console.log(sagor);
// console.log(sign_fun(11,"hello",{name:"mehedi",age:27}))
// sagor.final_fun()
let class_type = [];
class_type.push(sagor);
class_type.push(rabbi);
console.log(class_type);
