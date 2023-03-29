// Type
type Order = {
    productId: string
    price: number
};


type User = {
    firstName: string
    age: number
    email: string
    password?: string
    orders: Order[]
    register?(): string
};

//o ponto de interrogação faz com que a propriedade deixe de ser obrigatória e fique opcional

const user: User = {
    firstName: 'Jane',
    age: 20,
    email: 'jane@doe.com',
    orders: [{productId: "1", price: 200 }],
    register() {
        return "a"
    }
}

//ctrl espaço faz o autocomplete

const printLog = (message: string) => {}

printLog(user.password!)

//o ponto de exclamação ignora o tipo, também podia colocar 'message?'

// Unions

type Author = {
    books: string[]
}

const author: Author & User = {
    age: 2, 
    books: ["2"],
    email: "autor@gmail.com",
    firstName: "Daniel",
    orders: []
}

// o string pode ser vazio

// Interfaces

interface UserInterface {
    readonly firstName: string;
    email: string;
    login(): string;
}

const emailUser: UserInterface = {
    email: "f@gmail.com",
    firstName: "Figaro",
    login() {
        return "a"
    },
}

interface AuthorInterface {
    books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
    email: "autor@gmail.com",
    firstName: "Felipe",
    books: [],
    login() {
        return "a"
    },
};

//não dá para fazer interseção em interface - usar o type