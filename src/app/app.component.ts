import {Component, inject, signal, WritableSignal} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {LoginService} from './shared/services/login/login.service';
import {AdminLayoutComponent} from './admin/layouts/admin-layout/admin-layout/admin-layout.component';
import {RouterService} from './shared/services/router/router.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title: WritableSignal<string | undefined> = signal(undefined);
  loginService: LoginService = inject(LoginService);
  router: Router = inject(Router);
  activatedLoginRouter = false;

  constructor() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if(event.url === '/login') {
          this.activatedLoginRouter = true;
          this.loginService.setUser(null);
        }
        this.title.set(RouterService.modifyTitleByUrl(event.url));
      }
    });
  }

  protected readonly localStorage = localStorage;
}
