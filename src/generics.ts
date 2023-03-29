//forma de passar tipos como parametros

// const returnValue = <T>(value: any) => value
// o valor é any

const returnValue = <T>(value: T) => value //genérico T ou Type

const message = returnValue<string>('Hello');
const count = returnValue<number>(5);


//sem ser arrow tb fc

function getFirstValueFromArray<Type>(array: Type[]) {
    return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);


//Promises - tem de usar genérico

const returnPromise = async(): Promise<string> => {
    return "5"
}


//Classes

class GenericNumber<T> {
    zeroValue: T
    sum: (x: T, y: T) => T

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

const genNumber = new GenericNumber<number>(0, (x: number, y: number) => {
    return x+y
});