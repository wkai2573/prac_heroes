import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	//屬性__________

	heroes: Hero[] = [];

	//注入服務
	constructor(
		private heroService: HeroService,
		private messageService: MessageService) {}

	//方法__________

	//取得英雄arr 使用觀察注入
	getHeroes() {
		this.heroService.getHeroes().subscribe(heroes => {
			this.heroes = heroes;
		});
	}

	//事件:生命週期__________

	ngOnInit(): void {
		this.getHeroes();
	}

}
