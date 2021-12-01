import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];

	//注入服務
	constructor(private heroService: HeroService) {}

	getHeroes() {
		this.heroService.getHeroes().subscribe(heroes => {
			this.heroes = heroes.slice(0, 4);
		});
	}

	ngOnInit(): void {
		this.getHeroes();
	}

}
