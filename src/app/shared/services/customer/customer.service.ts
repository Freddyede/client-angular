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
  private userDatas: WritableSignal<User[]> = signal([]);
  private userCreatedOrUpdatedDatas: WritableSignal<{message: string; statusCode: number} | undefined> =
    signal(undefined);

  constructor() { }

  all(): Observable<User[]> {
    return this.http.get(this.BASE_URL).pipe(
      tap((result: any) => {
        this.userDatas.set(result['data']);
      }),
      map((): User[] => {
        return this.userDatas();
      })
    )
  }
  getData(): User[] | undefined {
    return this.userDatas();
  }

  create(data: any): Observable<{message: string, statusCode: number} | undefined> {
    return this.http.post(this.BASE_URL + '/created', data).pipe(
      tap((result: any) => {
        this.userCreatedOrUpdatedDatas.set({
          message: result['message'],
          statusCode: result['statusCode'],
        });
      }))
  }

}
