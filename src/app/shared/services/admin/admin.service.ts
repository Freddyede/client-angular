import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import {IDashboardDatas} from '../../interfaces/IDashboardDatas/IDashboardDatas';
import {environment} from '../../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private BASE_URL: string = environment.roads.dashboard;
  private dashboardDatas: WritableSignal<IDashboardDatas> =
    signal<IDashboardDatas>({ userNumber: 0, productsNumber: 0 });
  http: HttpClient = inject(HttpClient);
  constructor() {}

  getDashboardDatas(): Observable<IDashboardDatas> {
    return this.http.get(this.BASE_URL).pipe(
      tap((result: any) => {
        const userNumber: number =
          result['data']['users'] ? result['data']['users'].length : 0;
        const productsNumber: number =
          result['data']['products'] ? result['data']['products'].length : 0;
        this.dashboardDatas.set({ userNumber, productsNumber });
      }),
      map((): IDashboardDatas => {
        return this.dashboardDatas();
      })
    );
  }
  getDatas(): IDashboardDatas {
    return this.dashboardDatas() && this.dashboardDatas();
  }
}
