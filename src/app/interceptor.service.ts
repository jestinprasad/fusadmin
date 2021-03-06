import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private router: Router, private storageService: StorageService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenAuth;
    if (this.storageService.getObject('access_token') && request.url !== 'http://nsdcdev.s3.amazonaws.com/') {
      tokenAuth = request.clone({
        setHeaders: {
          // 'Content-Type': 'application/json',
          // 'Accept': 'application/json',
          'Authorization': localStorage.getItem('access_token')
        }
      });
    } else {
      tokenAuth = request.clone({
        setHeaders: {
          // 'Content-Type': 'application/json',
          // 'Accept': 'application/json',
        }
      });
    }

    // return next.handle(tokenAuth)
    return next.handle(tokenAuth).pipe(
      map((event: HttpEvent<any>) => {
        console.log('response', event);
        if (event instanceof HttpResponse) {
          if (event.headers.get('authorization')) {
            this.storageService.setObject('access_token', event.headers.get('authorization'));
          }
          return event;
        }
      }),
      catchError((err: HttpEvent<any>) => {
        let message: string;
        if (err instanceof HttpErrorResponse) {
          if (err.status === 409 || err.status === 402) {
            message = 'Data has already been taken or Duplicate Entry';
          } else if (err.status === 500) {
            message = 'Something went wrong in the server. Please try again';
          } else if (err.status === 400) {
            message = 'Some required fields are missing or data is invalid';
          } else if (err.status === 401) {
            message = 'Either email or password is wrong';
          } else if (err.status === 403) {
            message = 'Unauthorized to use this section';
          } else if (err.status === 404) {
            message = 'Resource is not available';
          } else {
            message = err.error;
          }
          setTimeout(() => {
            if (err.status === 401 || err.status === 403) {
              localStorage.clear();
              this.router.navigate(['/']);
            }
          }, 3000);
        }
        return Observable.throw(message);
      })
      );
  }

  }
