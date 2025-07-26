import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from "@angular/platform-browser/animations";

import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ɵBrowserAnimationBuilder } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    
    provideRouter(routes,withInMemoryScrolling({scrollPositionRestoration:'top'}), withHashLocation()),
    provideHttpClient(withFetch(),
    withInterceptors([loadingInterceptor,errorInterceptor]) 
  ),
    NgxSpinnerModule,
    provideAnimations(),
    
  ]
};
