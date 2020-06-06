import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbienteComponent } from './components/ambiente/ambiente.component';
import { GraficasambientalComponent } from './components/graficasambiental/graficasambiental.component';
import { ValoresComponent } from './components/valores/valores.component';
import { GraficasComponent } from './components/graficas/graficas.component';


const routes: Routes = [
  { path: '', component: ValoresComponent },
  { path: 'valores', component: ValoresComponent },
  { path: 'graficas', component: GraficasComponent },
  { path: 'ambiente', component: AmbienteComponent},
  { path: 'graficasambiental', component: GraficasambientalComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'heroes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
