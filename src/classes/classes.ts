import { forClass } from "../isplayer/isplayer.js";

export class mirajul implements forClass {
  name: string;
  private age: number;
  honest: boolean;

  constructor(n: string, a: number, h: boolean) {
    this.name = n;
    this.age = a;
    this.honest = h;
  }

  final_fun = () => {
    console.log(`my name is ${this.name} my age is ${this.age} `);
  };

  handelPrivate = () => {
    return this.age;
  };
}

interface myobject {
  width: number;
  length: number;
}

function drowRactangel(option: myobject) {
  return option.width + option.length;
}

let drowRactange_fun = {
  width: 10,
  length: 20,
  hight: 50,
};

drowRactangel(drowRactange_fun);
