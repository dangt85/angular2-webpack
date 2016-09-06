import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { MenuItem, MenuService } from '../shared';

@Component({
  selector: 'my-main-nav',
  templateUrl: 'main-nav.component.html',
  styleUrls: ['main-nav.component.sass']
})
export class MainNavComponent implements OnInit {

  menuItems: MenuItem[];
  selectedMenuItem: MenuItem;

  constructor(private titleService: Title, private menuService: MenuService) {
    titleService.setTitle('Dashboard');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getMenuItems(): void {
    this.menuService.getMenuItems().then(menuItems => this.menuItems = menuItems);
  }

  ngOnInit(): void {
    this.getMenuItems();
  }

  onSelect(menuItem: MenuItem): void {
    this.selectedMenuItem = menuItem;
  }
}
