import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navigasi',
  templateUrl: './navigasi.component.html',
  styleUrls: ['./navigasi.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class NavigasiComponent implements OnInit {
  menus = [];
  open: boolean = false;
  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.menus = this.sidebarService.getMenuList();
  }

  toggleSidebar(open: boolean) {
    this.open = open;
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  toggle(currentMenu) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

}
