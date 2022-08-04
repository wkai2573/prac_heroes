import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./ui/dashboard/dashboard.component";
import {HeroDetailComponent} from "./ui/hero-detail/hero-detail.component";
import {HeroesComponent} from "./ui/heroes/heroes.component";

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
