//angular組件
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //使[(NgModel)]可用

//自訂組件
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
		FormsModule, //使[(NgModel)]可用
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
