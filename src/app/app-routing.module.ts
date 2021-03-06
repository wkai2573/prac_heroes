import {NgModule} from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

//路由
const routes: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'}, //導向dashboard
	{path: 'dashboard', component: DashboardComponent},
	{path: 'detail/:id', component: HeroDetailComponent}, //用id指定目標
	{path: 'heroes', component: HeroesComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)], //配置路由
	exports: [RouterModule]
})
export class AppRoutingModule {}
