import {Component, inject, input, InputSignal} from '@angular/core';
import {LoginService} from '../../../../shared/services/login/login.service';
import {Router, RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';

/**
 * Contains sidebar elements
 * @version 1.0.0
 * @author Patouillard Franck<patouillardfranck3@gmail.com>
 */
@Component({
  selector: 'app-sidebar',
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.less'
})
export class SidebarComponent {
  title: InputSignal<string|undefined> = input<string | undefined>(undefined, {
    alias: 'admin-sidebar-title',
  });
  loginService: LoginService = inject(LoginService);
  router: Router = inject(Router);

  logout(): void {
    this.router.navigate(['/login']).then();
    this.loginService.logout();
  }
}
