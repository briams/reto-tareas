import { Injectable } from '@angular/core';
import { ILogin } from '../models/login.interface';
import { SessionService } from './session.service';
import { users } from '../mockup/users-data';
import { of, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private sessionSvc: SessionService) {}

  login({ username, password }: ILogin): Observable<boolean> {
    const user = users.find((i) => i.username == username);
    if (!user) {
      return throwError(() => 'USER_NOT_EXIST');
    }
    if (user?.password != password) {
      return throwError(() => 'PASSWORD_INVALID');
    }
    const { password: passUser, ...userInfo } = user!;
    console.log('🚀 ~ login ~ user:', user);
    const token = new TextEncoder().encode(username + ':' + password);
    this.sessionSvc.setSession({
      token,
      ...userInfo,
    });

    return of(true);
  }
}
