import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user/user.model';
import {Credentials} from '../../interfaces/credentials/credentials';
import {map, Observable, tap} from 'rxjs';
import {environment} from '../../../../environments/environment.development';

/**
 * Return data for login page information
 * @version 1.0.0
 * @author Patouillard Franck<patouillardfranck3@gmail.com>
 */
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http: HttpClient = inject(HttpClient);
  private user: WritableSignal<User | null | undefined> = signal<User | null | undefined>(
    JSON.parse(localStorage.getItem('user') as string) ?? undefined
  );

  constructor() { }

  login(credentials: Credentials): Observable<User | null | undefined> {
    return this.http.post(environment.roads.login, credentials)
      .pipe(
        tap((result: any) => {
          localStorage.setItem('user', JSON.stringify(result['user']));
          localStorage.setItem('token', result['token']);
          const user = Object.assign(new User(), result['user']);
          this.user.set(user);
        }),
        map((): User | null | undefined => {
          return this.user();
        })
      )
  }

  setUser(value: User | null | undefined): void {
    this.user.set(value);
  }

  logout(): void {
    localStorage.clear();
  }
  getUser(): User | null | undefined {
    return this.user();
  }
}
