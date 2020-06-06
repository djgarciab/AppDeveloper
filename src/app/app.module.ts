import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AmbienteComponent } from './components/ambiente/ambiente.component';
import { ValoresComponent } from './components/valores/valores.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { GraficasambientalComponent } from './components/graficasambiental/graficasambiental.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AmbienteComponent,
    ValoresComponent,
    GraficasComponent,
    GraficasambientalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
