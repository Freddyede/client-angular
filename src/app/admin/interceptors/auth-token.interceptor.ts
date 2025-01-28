import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';

/**
 * If a user is connected, then autocomplete httpClient header
 * with good authorization type
 * @param req
 * @param next
 * @version 1.0.0
 * @author Patouillard Franck<patouillardfranck3@gmail.com>
*/
export const authTokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>, next: HttpHandlerFn
) => {
  const token = localStorage.getItem('token');

  let requestToSend = req;

  if (token) {
    const headers = req.headers.set('Authorization', 'Bearer ' + token);
    requestToSend = req.clone({
      headers: headers,
    });
  }
  return next(requestToSend);
};
