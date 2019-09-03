import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = JSON.parse(this.authService.getToken());
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          // Authorization: `Bearer ${currentUser.token}`
          Authorization: `${currentUser.token}`
        }
      });
    }

    return next.handle(request);
  }
}
