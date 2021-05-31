import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { BarraExperienciaComponent } from './components/barra-experiencia/barra-experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BarraExperienciaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
