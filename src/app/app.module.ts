import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { HeaderComponent } from './header/header.component';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { RouterCustomModule } from './router.module';

@NgModule({
  declarations: [BeerComponent, HomeComponent, AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpModule,
    RouterCustomModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule {}
