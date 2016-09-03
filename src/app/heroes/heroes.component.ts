import { Component } from '@angular/core';

@Component({
  selector: 'my-heroes',
  template: `
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    `
})
export class HeroesComponent {
  constructor() {}
}
