import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { MainComponent } from './dashboard/main/main.component';
import { CardComponent } from './dashboard/card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActividadRecienteComponent } from './dashboard/actividad-reciente/actividad-reciente.component';
import { TareasComponent } from './dashboard/tareas/tareas.component';
import { ListarPrincipalesComponent } from './antenas/listar-principales/listar-principales.component';
import { ListarClientesComponent } from './clientes/listar-clientes/listar-clientes.component';
import { RegistrarClienteComponent } from './clientes/registrar-cliente/registrar-cliente.component';
import { IndexComponent } from './index/index.component';
import { MainComponent as clientes } from './clientes/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    MainComponent,
    CardComponent,
    SidebarComponent,
    ActividadRecienteComponent,
    TareasComponent,
    ListarPrincipalesComponent,
    ListarClientesComponent,
    RegistrarClienteComponent,
    IndexComponent,
    clientes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
