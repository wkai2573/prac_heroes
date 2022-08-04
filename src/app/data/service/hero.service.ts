import {Injectable} from '@angular/core';
import {Hero} from '../model/hero';
import {HEROES} from './mock-heroes';
import {MessageService} from './message.service';

//可觀察對象
import {catchError, Observable, of, tap} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

//注入器
@Injectable({
	providedIn: 'root'
})
export class HeroService {

	//屬性__________

	//請求api
	private heroesUrl = 'api/heroes';
	//請求參數
	httpOptions = {
		headers: new HttpHeaders({'Content-Type': 'application/json'})
	};

	constructor(
		private messageService: MessageService, //注入服務
		private http: HttpClient, //請求用
	) {}

	//方法__________

	//GET請求: 取得英雄arr
	getHeroes(): Observable<Hero[]> {
		return this.http.get<Hero[]>(this.heroesUrl)
			.pipe(
				//中途紀錄
				tap(_ => this.log('fetched heroes')),
				//錯誤處理
				catchError(this.handleError<Hero[]>('getHeroes', []))
			);
	}

	//GET請求: 取得指定英雄
	getHero(id: number): Observable<Hero> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.get<Hero>(url).pipe(
			tap(_ => this.log(`fetched hero id=${id}`)),
			catchError(this.handleError<Hero>(`getHero id=${id}`))
		);
	}

	//PUT請求: 更新英雄至伺服器
	updateHero(hero: Hero): Observable<any> {
		return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
			tap(_ => this.log(`updated hero id=${hero.id}`)),
			catchError(this.handleError<any>('updateHero'))
		);
	}

	//POST請求: 新增英雄
	addHero(hero: Hero): Observable<Hero> {
		return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
			tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
			catchError(this.handleError<Hero>('addHero'))
		);
	}

	//DELETE請求: 刪除指定英雄
	deleteHero(id: number): Observable<Hero> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.delete<Hero>(url, this.httpOptions).pipe(
			tap(_ => this.log(`deleted hero id=${id}`)),
			catchError(this.handleError<Hero>('deleteHero'))
		);
	}

	//GET請求: 查詢英雄
	searchHeroes(term: string): Observable<Hero[]> {
		if (!term.trim()) return of([]);

		return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
			tap(heroArr => heroArr.length ? 
				this.log(`found heroes matching "${term}"`) :
				this.log(`no heroes matching "${term}"`)),
			catchError(this.handleError<Hero[]>('searchHeroes', []))
		);
	}

	//紀錄訊息
	private log(message: string) {
		this.messageService.add(`HeroService: ${message}`);
	}

	/**
	 * 錯誤處理器
	 * @param operation - 操作名稱
	 * @param result - 錯誤時回傳此項目
	 */
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			this.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		};
	}
}
