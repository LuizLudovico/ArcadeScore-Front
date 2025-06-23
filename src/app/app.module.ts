import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PontuacaoModule } from './pages/pontuacao/pontuacao.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatTableModule,
  MatCardModule,
  MatButtonModule,
  PontuacaoModule 
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
