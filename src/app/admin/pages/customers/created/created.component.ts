import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { CustomerService } from '../../../../shared/services/customer/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-created',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './created.component.html',
  styleUrl: './created.component.less'
})
export class CreatedComponent {
  private customerService: CustomerService = inject(CustomerService);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router);

  customerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.minLength(8)],
    avatar: ['', Validators.required]
  })

  onSubmit(e: Event) {
    e.preventDefault();
    if(this.customerForm.get('avatar')?.value === '') {
      this.customerForm.patchValue({
        avatar: null,
      });
    }
    this.customerService.create(this.customerForm.value).subscribe();
    setTimeout(() => this.router.navigate(['/super/clients']).then(), 3000);
  }

}
