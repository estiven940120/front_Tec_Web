import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LaboratorioComponent} from './laboratorio/laboratorio.component';
import { InicioComponent } from './inicio/inicio.component';
import { AgregarLabComponent } from './agregar-lab/agregar-lab.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

const routes: Routes = [
  { path: 'laboratorio', component: LaboratorioComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'agregar', component: AgregarLabComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'quienes', component: QuienesSomosComponent},
  { path: '**', redirectTo: '/inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
