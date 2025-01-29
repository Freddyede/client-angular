import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.development';
import {map, Observable, tap} from 'rxjs';
import {User} from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private http: HttpClient = inject(HttpClient);
  private BASE_URL: string = environment.roads.customers;
  private userDatas: WritableSignal<User[] | undefined> = signal(undefined);

  constructor() { }

  all(): Observable<User[] | undefined> {
    return this.http.get(this.BASE_URL).pipe(
      tap((result: any) => {
        this.userDatas.set(result['data']);
      }),
      map((): User[] | undefined => {
        return this.userDatas();
      })
    )
  }
  getData(): User[] | undefined {
    return this.userDatas();
  }
}
