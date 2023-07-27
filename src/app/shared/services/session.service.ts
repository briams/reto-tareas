import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { ISession } from '../models/session.interface';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private loggedIn = false;

  constructor(private lsSvc: LocalStorageService, private router: Router) {}

  isLoggedIn(): boolean {
    this.loggedIn = this.lsSvc.getItem('xDolYs') ? true : false;
    return this.loggedIn;
  }

  logoutInterceptor(): void {
    this.clearSession();
  }

  getSession() {
    this.isLoggedIn();
    return this.lsSvc.getItem('xDolYs', true) || false;
  }

  setSession(session: ISession): void {
    console.log('🚀 ~ setSession ~ session:', session);
    this.lsSvc.setItem('xDolYs', session, true);
    this.isLoggedIn();
  }

  clearSession(): void {
    this.lsSvc.remove('xDolYs');
    this.loggedIn = false;
    this.router.navigate(['/auth/login']);
  }
}
