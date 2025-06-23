import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PontuacaoRoutingModule } from './pontuacao-routing.module';
import { ListagemComponent } from './listagem/listagem.component';
import { FormularioComponent } from './formulario/formulario.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';

@NgModule({
  declarations: [
    ListagemComponent, 
    FormularioComponent,
    EstatisticasComponent
  ],
  imports: [
    CommonModule,
    PontuacaoRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule, 
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
  ]
})
export class PontuacaoModule { }

