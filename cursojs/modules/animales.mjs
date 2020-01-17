
export class Animal {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(` Soy un animal tipo ${this.name}`);
    }
}


export class Gato extends Animal {

    constructor() {
        super('Gato');

    }
}
export class Oso extends Animal {

    constructor() {
        super('Oso');

    }
}
export  function  ejemplo (){
    console.log('function ejemplo');

}

// module.exports = {
//     Animal:Animal, Oso:Oso
// }