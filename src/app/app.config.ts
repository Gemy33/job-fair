import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    
    provideRouter(routes,withInMemoryScrolling({scrollPositionRestoration:'top'}),),
    provideHttpClient(withFetch()),
  ]
};
