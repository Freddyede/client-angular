import {Component, inject, OnDestroy, OnInit, signal, WritableSignal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {User} from '../../../../shared/models/user/user.model';
import { CustomerService } from '../../../../shared/services/customer/customer.service';
import {Subscription} from 'rxjs';

/**
 * Contains users pages informations
 * @version 1.0.0
 * @author Patouillard Franck<patouillardfranck3@gmail.com>
 */
@Component({
  selector: 'app-all',
  imports: [
    RouterLink
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.less'
})
export class CustomersComponent implements OnInit, OnDestroy {
  users: WritableSignal<User[] | undefined> = signal<User[] | undefined>([]);
  customerService: CustomerService = inject(CustomerService);
  private customersSubscription: Subscription | undefined;

  ngOnInit() {
    this.customersSubscription = this.customerService.all().subscribe(
        (data: User[]) => this.users.set(data)
    );
  }

  ngOnDestroy(): void {
    this.customersSubscription?.unsubscribe();
  }

  deleteUser(id: number | undefined) {
    if(id) {
      this.customerService.delete(id).subscribe(
        (data: any) => {
          if(data.statusCode === 200 && data.message === 'Company deleted successfully.') {
            window.location.reload();
          }
        }
      );
    }
  }

}
