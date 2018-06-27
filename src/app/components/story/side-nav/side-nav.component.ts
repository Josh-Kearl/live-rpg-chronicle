import {Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

/** @title Sidenav with custom escape and backdrop click behavior */

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
