import {Component, inject, OnDestroy} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {LoginService} from '../../shared/services/login/login.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Credentials} from '../../shared/interfaces/credentials/credentials';

/**
 * Contains login page informations
 * @version 1.0.0
 * @author Patouillard Franck<patouillardfranck3@gmail.com>
 */
@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    MatError
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent implements OnDestroy {
  private formBuilder: FormBuilder = inject(FormBuilder);
  private loginService: LoginService = inject(LoginService);
  private router: Router = inject(Router);

  private loginSubscription: Subscription | null = null;

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }

  loginFormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  invalidCredentials: boolean = false;

  login() {
    this.loginSubscription = this.loginService.login(this.loginFormGroup.value as Credentials)
      .subscribe({
        next: () => {
          if(this.loginService.getUser()?.roles?.roles.includes('ROLE_SUPER_ADMIN')) {
            this.navigateSuperDashboard();
          } else if(this.loginService.getUser()?.roles?.roles.includes('ROLE_ADMIN')) {
            this.navigateAdminDashboard();
          } else {
            this.navigateProfil();
          }
        },
        error: (error: any) => {
          console.error(error);
          this.invalidCredentials = true;
        }
      });
  }
  navigateProfil(): void {
    this.router.navigate(['/profil']).then();
  }
  navigateSuperDashboard(): void {
    this.router.navigate(['/super/dashboard']).then();
  }
  navigateAdminDashboard(): void {
    this.router.navigate(['/admin/dashboard']).then();
  }
}
