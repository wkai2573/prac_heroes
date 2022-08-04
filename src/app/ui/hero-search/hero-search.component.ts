import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Hero} from 'src/app/data/model/hero';
import {HeroService} from 'src/app/data/service/hero.service';

@Component({
	selector: 'app-hero-search',
	templateUrl: './hero-search.component.html',
	styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

	heroes$!: Observable<Hero[]>;

	//查詢觀察流(Subject:可被觀察,也可訂閱其他觀察對象)
	private searchTerms = new Subject<string>();

	constructor(
		private heroService: HeroService //注入服務
	) {}

	//查詢 (將字串推送至觀察流)
	search(term: string) {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		//初始化_設定觀察流參數
		this.heroes$ = this.searchTerms.pipe(
			//防抖300ms (操作後300ms內沒再操作,才執行)
			debounceTime(300),
			//相同則不執行
			distinctUntilChanged(),
			//更改後執行新查詢
			switchMap((term: string) => {
				return this.heroService.searchHeroes(term);
			}),
		);
	}

}
