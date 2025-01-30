import {Component, inject, signal, WritableSignal} from '@angular/core';
import {UsersComponent} from '../../../components/table/users/users.component';
import {AdminService} from '../../../../shared/services/admin/admin.service';
import {IDashboardDatas} from '../../../../shared/interfaces/IDashboardDatas/IDashboardDatas';

/**
 * Contains dashboard page informations
 * @version 1.0.0
 * @author Patouillard Franck<patouillardfranck3@gmail.com>
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [
    UsersComponent
  ],
  styleUrl: './dashboard.component.less'
})
export class DashboardComponent {
  private adminService: AdminService = inject(AdminService);
  private DEFAULT_USERS: IDashboardDatas = {
    userNumber: 0,
    productsNumber: 0,
  };
  activateRefresh: boolean = false;

  users: WritableSignal<IDashboardDatas> =
    signal<IDashboardDatas>(this.DEFAULT_USERS);

  getDatas(): void {
    this.adminService.getDashboardDatas().subscribe();
    if(this.adminService.getDatas()) {
      this.users.set(this.adminService.getDatas());
    }
  }
  refreshData(): void {
    this.activateRefresh = true;
    this.getDatas();
    const refreshTimeOut = setInterval((): boolean => this.activateRefresh = false, 500);
    setInterval((): void => clearInterval(refreshTimeOut), 500);
  }
  constructor() {
    this.getDatas();
    const userTimeOut = setTimeout(() => this.getDatas(), 500);
    setInterval(() => clearTimeout(userTimeOut), 500);
  }
}
