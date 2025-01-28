import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  static modifyTitleByUrl(url: string): string {
    let value: string = '';
    if(url === '/super/dashboard' || url === '/admin/dashboard') {
      value = 'Dashboard';
    }
    return value;
  }
}
