import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
	selector: 'app-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

	//@Input(): 由HTML傳入
	@Input() hero?: Hero;

	constructor(
		private heroService: HeroService, //注入服務
		private route: ActivatedRoute,    //路由資訊
		private location: Location,       //瀏覽器資訊
	) {}

	getHero() {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.heroService.getHero(id).subscribe(hero => this.hero = hero);
	}

	//返回
	goBack() {
		this.location.back();
	}

	ngOnInit(): void {
		this.getHero();
	}
}
