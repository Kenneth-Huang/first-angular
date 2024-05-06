import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import {authorized} from '../util/mockAuth'

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  //Get the router with Inject();
  const router: Router = inject(Router);
  const protectedRoutes: string[] = ['/services', 'services/:id']
  const isReject = protectedRoutes.includes(state.url) && !authorized;
  return isReject ? router.navigate(['/']) : true;
};
