import { ClassProvider } from '@angular/core';
import { CalculatorService } from './calculator.service';


export const CalculatorProvider: ClassProvider = {
    useClass: CalculatorService,
    provide : CalculatorService,
};
