import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Log error
        console.error('HTTP Error:', error.message);

        // Show user-friendly message
        alert(error.message || 'Something went wrong');

        // Optional: handle specific codes
        if (error.status === 401) {
          // Redirect to login, etc.
          console.warn('Unauthorized request - maybe redirect to login');
        }

        return throwError(() => error);
      }))
    
  
};
