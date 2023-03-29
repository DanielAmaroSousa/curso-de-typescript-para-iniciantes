interface IPerson {
    id: number;
    sayMyName(): string;
}



class Person implements IPerson {
    readonly id: number; //não altera fora do this.id ou seja não permite variavel.id = 123
    protected name: string; //não deixa acessar variavel.name fora da classe e subclasse
    private age: number; //não deixa utilizar nas subclasses

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string {
        return this.name;
    }
}

class Employe extends Person {  //subclasse
    constructor(id: number, name: string, age: number) {
        super(id, name, age)
    }

    whoAmI() {
        return this.name  //não consegue acessar o this.age pq é privado
    }
}



const felipe = new Person(1, "Felipe", 21);

//shorthand para construtores de classes

class ShPerson {

    constructor(
        readonly id: number,
        protected name: string,
        private age: number) {}
}

