import { Component} from '@angular/core';

@Component({

	selector: 'app-root',
	template: `
				<h1> {{title}} </h1>
				<nav>
					<a routerLink='/heroes'> Heroes </a>
					<a routerLink='/dashboard'> Dashboard </a>
				</nav>
				<!-- <my-heroes></my-heroes> -->
				<router-outlet></router-outlet>

	          `,
	  styleUrls:['./app.component.css']        
})

export  class AppComponent{

	title = 'Tour of Heroes';
} 