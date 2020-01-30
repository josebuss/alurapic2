import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Ativou o guarda de rota');
    if (this.userService.isLogged()) {
      /* Assim também funciona =)
      this.userService.getUser().subscribe(user => this.router.navigate(['user', user.name]));
      */
      this.router.navigate(['user', this.userService.getUserName()]);
      return false;
    }
    return true;
  }
}
