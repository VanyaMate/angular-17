import { Injectable } from '@angular/core';


export interface ICalculator {
    add (a: number, b: number): number;
}

@Injectable({
    providedIn: 'root',
})
export class CalculatorService implements ICalculator {

    constructor () {
    }

    add (a: number, b: number): number {
        return a + b;
    }
}
