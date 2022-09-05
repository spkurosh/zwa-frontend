import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPrincipalesComponent } from './antenas/listar-principales/listar-principales.component';
import { RegistrarClienteComponent } from './clientes/registrar-cliente/registrar-cliente.component';
import { MainComponent as dashboard } from './dashboard/main/main.component';
import { MainComponent as clientes } from './clientes/main/main.component';

const routes: Routes = [
  {path: '', component: dashboard},
  {path: 'clientes/registar', component: RegistrarClienteComponent},
  {path: 'clientes/incio', component: clientes},
  {path: 'listarPrincipales', component: ListarPrincipalesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
