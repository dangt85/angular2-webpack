import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'my-main-nav',
  templateUrl: 'main-nav.component.html',
  styleUrls: ['main-nav.component.sass']
})
export class MainNavComponent {

  constructor(private titleService: Title) {
    titleService.setTitle('Dashboard');
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
