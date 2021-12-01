import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {MessageService} from './message.service';

//可觀察對象
import {Observable, of} from 'rxjs';

//注入器
@Injectable({
	providedIn: 'root'
})
export class HeroService {

	//注入服務
	constructor(private messageService: MessageService) {}

	getHeroes(): Observable<Hero[]> {
		//of:模擬可觀察對象
		const heroes = of(HEROES);
		this.messageService.add('HeroService: fetched heroes');
		return heroes;
	}

	getHero(id: number): Observable<Hero> {
		const hero = HEROES.find(hero => hero.id === id)!;
		this.messageService.add(`HeroService: fetched hero id=${id}`);
		return of(hero);
	}
}
