import { Injectable } from '@angular/core';

/**
 * Contains all router functions does make in this application
 * @version 1.0.0
 * @author Patouillard Franck<patouillardfranck3@gmail.com>
 */
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
