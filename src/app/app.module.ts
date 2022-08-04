//angular組件
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; //使[(NgModel)]可用

//自訂組件
import {AppComponent} from './app.component';
import {HeroesComponent} from './ui/heroes/heroes.component';
import {HeroDetailComponent} from './ui/hero-detail/hero-detail.component';
import {MessagesComponent} from './ui/messages/messages.component';
import {DashboardComponent} from './ui/dashboard/dashboard.component';

//路由
import {AppRoutingModule} from './app-routing.module';

//HTTP服務
import {HttpClientModule} from '@angular/common/http';

//模擬伺服器
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HeroSearchComponent} from './ui/hero-search/hero-search.component';
import {InMemoryDataService} from './data/service/in-memory-data.service';

@NgModule({
	declarations: [
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
		MessagesComponent,
		DashboardComponent,
		HeroSearchComponent,
	],
	imports: [
		BrowserModule,
		FormsModule, //使[(NgModel)]可用
		AppRoutingModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(
			InMemoryDataService, {dataEncapsulation: false}
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
