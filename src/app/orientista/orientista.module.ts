import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrientistaRoutingModule} from './orientista-routing.module';
import {OrientistasComponent} from './orientistas/orientistas.component';
import {NavbarOrientistaComponent} from './navbar-orientista/navbar-orientista.component';
import { InicioComponent } from './inicio/inicio.component';
import { BuscarEventosComponent } from './buscar-eventos/buscar-eventos.component';
import {FormsModule} from '@angular/forms';
import { DetalheEventoComponent } from './detalhe-evento/detalhe-evento.component';
import { InscricoesComponent } from './inscricoes/inscricoes.component';

@NgModule({
  declarations: [
    OrientistasComponent,
    NavbarOrientistaComponent,
    InicioComponent,
    BuscarEventosComponent,
    DetalheEventoComponent,
    InscricoesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrientistaRoutingModule
  ]
})
export class OrientistaModule {
}
