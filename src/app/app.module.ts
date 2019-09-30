import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';
import { InicioComponent } from './inicio/inicio.component';
import { AgregarLabComponent } from './agregar-lab/agregar-lab.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';


@NgModule({
  declarations: [
    AppComponent,
    LaboratorioComponent,
    InicioComponent,
    AgregarLabComponent,
    ContactoComponent,
    QuienesSomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
