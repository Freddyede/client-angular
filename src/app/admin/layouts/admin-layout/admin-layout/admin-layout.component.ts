import {Component, input, InputSignal} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from '../../../components/sidebar/sidebar/sidebar.component';

/**
 * Contains layout for super pages informations
 * @version 1.0.0
 * @author Patouillard Franck<patouillardfranck3@gmail.com>
 */
@Component({
  selector: 'app-admin-layout',
  imports: [
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.less'
})
export class AdminLayoutComponent {

  title: InputSignal<string|undefined> = input<string|undefined>(undefined, {
    alias: 'sidebar-title'
  });
  constructor() {
  }
}
