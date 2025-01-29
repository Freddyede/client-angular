import {Component, inject, signal, WritableSignal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {User} from '../../../../shared/models/user/user.model';
import { CustomerService } from '../../../../shared/services/customer/customer.service';

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
export class CustomersComponent {
  users: WritableSignal<User[] | undefined> = signal<User[] | undefined>([]);
  customerService: CustomerService = inject(CustomerService);

  constructor() {
    this.customerService.all().subscribe();
    this.users.set(this.customerService.getData());
  }

}
