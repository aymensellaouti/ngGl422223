import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FakeAuthService } from '../guards/auth-guard.guard';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: FakeAuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.isLoggedIn()) {
      const headers = new HttpHeaders().set('authorization', 'some Token');
      const cloneReq = request.clone;
    }
    return next.handle(request);
  }
}

export const interceptorProvider = {
  provide: HTTP_INTER
}
