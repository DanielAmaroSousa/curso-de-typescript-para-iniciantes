//compile with tsc.cmd

let age = 5;
console.log(age)

const firstName: string = 'Daniel'
const isValid: boolean = true
let idk: any = 5

idk= '12'
idk= true

// Listas

const ids: number[] = [1, 2, 3, 4, 5]
const booleans: boolean[] = [true, false, true, false]
const names: string[] = ["Filipe", "Joana"]

// Tupla - tem de manter a ordem
const person: [number, string] = [1, "Daniel"]

// Lista de Tuplas
const people: [number, string][] = [
    [1, "Joana"],
    [2, "Filipe"],
];

// Intersections
const productId: string | number | boolean = false

// Enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = 'Esquerda',
}

const direction = Direction.Up;

console.log(direction);

// type assertions

const productName: any = "Boné";

// let itemId = productName as string;
let itemId = <string>productName