import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';  
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: 
  		 './heroes.component.html'
  		 ,

  styleUrls:['./heroes.component.css'],
// providers:[HeroService]

})


export class HeroesComponent implements OnInit{

		title = 'AngularJS';
		   

		heroes :Hero[];
		selectedHero :Hero;

		constructor (private  heroService : HeroService,
                 private router:Router
                ){

		}

    ngOnInit(): void{
      this.getHeroes();
    }
		getHeroes(): void {
			this.heroService.getHeroes().then(heroes=>this.heroes = heroes);
		}

    gotoDetail():void{
      this.router.navigate(['/detail',this.selectedHero.id]);
    }

  
onSelect(hero:Hero): void {
	this.selectedHero = hero;
}
}
