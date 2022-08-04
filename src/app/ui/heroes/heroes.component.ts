import {Component, OnInit} from "@angular/core";
import {Hero} from "src/app/data/model/hero";
import {HeroService} from "src/app/data/service/hero.service";
import {MessageService} from "src/app/data/service/message.service";


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
		private heroService:HeroService,
		private messageService: MessageService) {}

	//方法__________

	//取得英雄arr 使用觀察注入
	getHeroes() {
		this.heroService.getHeroes().subscribe(heroes => {
			this.heroes = heroes;
		});
	}

	//新增英雄
	add(name:string) {
		name = name.trim();
		if (!name) return;
		const newHero = {name} as Hero;
		this.heroService.addHero(newHero).subscribe(hero=>{
			this.heroes.push(hero);
		});
	}

	//刪除英雄
	delete(hero: Hero): void {
		this.heroes = this.heroes.filter(h => h !== hero);
		this.heroService.deleteHero(hero.id).subscribe();
	}

	//事件:生命週期__________

	ngOnInit(): void {
		this.getHeroes();
	}

}
