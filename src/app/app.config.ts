import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CalculatorProvider } from './service/calculator/calculator.service.provider';


export const appConfig: ApplicationConfig = {
    providers: [ provideRouter(routes), CalculatorProvider ],
};
