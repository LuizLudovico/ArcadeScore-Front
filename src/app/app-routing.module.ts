import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pontuacao/listagem', pathMatch: 'full' },
  {
    path: 'pontuacao',
    loadChildren: () =>
      import('./pages/pontuacao/pontuacao.module').then((m) => m.PontuacaoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
