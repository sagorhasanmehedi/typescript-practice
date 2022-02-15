export class mirajul {
    constructor(n, a, h) {
        this.final_fun = () => {
            console.log(`my name is ${this.name} my age is ${this.age} `);
        };
        this.handelPrivate = () => {
            return this.age;
        };
        this.name = n;
        this.age = a;
        this.honest = h;
    }
}
function drowRactangel(option) {
    return option.width + option.length;
}
let drowRactange_fun = {
    width: 10,
    length: 20,
    hight: 50,
};
drowRactangel(drowRactange_fun);
