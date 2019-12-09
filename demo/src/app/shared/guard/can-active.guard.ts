import { Injectable } from '@angular/core';
import { Router, CanActivate  } from '@angular/router';
import { AuthService } from '../auth.service';
@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate {
  constructor(public service: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.service.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
