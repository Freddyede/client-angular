import {Component, EventEmitter, input, InputSignal, Output} from '@angular/core';
import {LoaderComponent} from '../../../../shared/components/loader/loader.component';
import {IDashboardDatas} from '../../../../shared/interfaces/IDashboardDatas/IDashboardDatas';

@Component({
  selector: 'app-users',
  imports: [
    LoaderComponent
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
