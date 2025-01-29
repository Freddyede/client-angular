import {Routes} from '@angular/router';
import {isLoggedInAsSuperAdminGuard} from './guards/is-logged-in-as-super-admin.guard';
import {DashboardComponent} from './pages/dashboard/dashboard/dashboard.component';
import {CustomersComponent} from './pages/customers/all/customers.component';
import {CreatedComponent} from './pages/customers/created/created.component';

/**
 * Contains all admin roads
 * @version 1.0.0
 * @author Patouillard Franck<patouillardfranck3@gmail.com>
 */
export const adminRoutes: Routes = [
  {
    path: 'super',
    canActivate: [isLoggedInAsSuperAdminGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'clients',
        children: [
          { path: '', component: CustomersComponent },
          { path: 'created', component: CreatedComponent },
        ]
      },
    ]
  },
]
