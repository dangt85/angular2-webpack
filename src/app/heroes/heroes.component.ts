import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { Hero, HeroService } from '../shared';

@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero: Hero;

  constructor(
    /*private router: Router, */
    private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    // let link = ['/detail', hero.id];
    // this.router.navigate(link);
    this.selectedHero = hero;
  }
}
