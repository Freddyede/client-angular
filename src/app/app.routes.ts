import {Routes} from '@angular/router';
import {adminRoutes} from './admin/admin.routes';
import {LoginComponent} from './pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'super/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  ...adminRoutes,
];
