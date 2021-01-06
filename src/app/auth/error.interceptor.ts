import { Injectable } from '@angular/core';
import {catchError,} from 'rxjs/operators'

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private snackBar:MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
   Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err=>{
        this.snackBar.open(err.message, "Ok", {
          duration:4000
        });
        console.log(err.message)
        return throwError(err)
      })
    )

  }
}
