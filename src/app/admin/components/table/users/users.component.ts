import {Component, EventEmitter, input, InputSignal, Output} from '@angular/core';
import {LoaderComponent} from '../../../../shared/components/loader/loader.component';
import {IDashboardDatas} from '../../../../shared/interfaces/IDashboardDatas/IDashboardDatas';
import {RouterLink} from '@angular/router';

/**
 * Contains all information about user inside table array device
 * @version 1.0.0
 * @author Patouillard Franck<patouillardfranck3@gmail.com>
 */
@Component({
  selector: 'app-users',
  imports: [
    LoaderComponent,
    RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.less'
})
export class UsersComponent {
  users: InputSignal<IDashboardDatas | null | undefined> =
    input<IDashboardDatas | null | undefined>(undefined);
  userActivatedRefresh = input<boolean>(false);
  @Output() refreshData = new EventEmitter<any>();
  notifyParent(): void {
    this.refreshData.emit();
  }
}
