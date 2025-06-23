import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PontuacaoService } from '../../../services/pontuacao.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: PontuacaoService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fb.group({
      dataPartida: [null, Validators.required],
      pontos: [null, [Validators.required, Validators.min(1)]],
      jogador: [null, Validators.required]
    });
  }

  salvar(): void {
    if (this.form.valid) {
      this.service.registrar(this.form.value).subscribe({
        next: () => {
          this.snackBar.open('Pontuação salva com sucesso!', 'Fechar', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
          this.form.reset();
          this.router.navigate(['/pontuacao/listagem']);
        },
        error: () => {
          this.snackBar.open('Erro ao salvar pontuação.', 'Fechar', {
            duration: 3000,
            panelClass: ['snack-error'],
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
        }
      });
    }
  }
}
