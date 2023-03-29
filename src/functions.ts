const sum = (x: number, y: number) => {
    return x + y;
};

const value = sum(2, 3);

const sumString = (x: number, y: number): string => {
    return (x + y).toString();
};

const valueS = sumString(2, 3);

const log = (message: string): void => {
    console.log(message);
};

//void é uma função que não retorna nada

