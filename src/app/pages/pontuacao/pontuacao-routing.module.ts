import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';

const routes: Routes = [
  { path: 'listagem', component: ListagemComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'estatisticas/:jogador', component: EstatisticasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PontuacaoRoutingModule {}
