import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalculatorService, ICalculator } from './service/calculator/calculator.service';


@Component({
    selector   : 'app-root',
    standalone : true,
    imports    : [ CommonModule, RouterOutlet ],
    templateUrl: './app.component.html',
    styleUrl   : './app.component.scss',
})
export class AppComponent {
    constructor (@Inject(CalculatorService) private readonly calculatorService: ICalculator) {
    }

    // private calculator = inject(CalculatorService);

    title: string  = 'angular_start';
    value: number  = 1;
    ingredientList = [
        { name: 'noodles', quantity: 1 },
        { name: 'miso broth', quantity: 1 },
        { name: 'egg', quantity: 2 },
    ];

    increment () {
        this.value += 1;
    }

    decrement () {
        this.value -= 1;
    }

    log (value: any, event: any) {
        console.log('log:', value, 'event:', event);
    }

    calc (value: number) {
        return this.calculatorService.add(value, this.value);
    }
}
