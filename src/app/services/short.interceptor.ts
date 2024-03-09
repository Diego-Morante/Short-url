import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = 'b62af5071aa80f1a1ea17963e08b51bde297deff'

    request = request.clone({ setHeaders: {Authorization:'Bearer '+ token } })
    return next.handle(request);
  }
}
