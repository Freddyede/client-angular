import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {LoginService} from '../../shared/services/login/login.service';
import {Observable} from 'rxjs';

export const isLoggedInAsSuperAdminGuard: CanActivateFn = (): boolean | Observable<boolean> => {
  const loginService: LoginService = inject(LoginService);
  const router: Router = inject(Router);

  if(loginService.getUser() === undefined) {
    router.navigate(['/login']).then()
    return false;
  }
  if(!loginService.getUser()?.roles?.roles.includes('ROLE_SUPER_ADMIN')) {
    router.navigate(['/login']).then();
    return false;
  }
  if(loginService.getUser() === null) {
    router.navigate(['/login']).then();
    return false;
  }
  return true;
};
