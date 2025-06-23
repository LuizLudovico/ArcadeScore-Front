import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PontuacaoService } from '../../../services/pontuacao.service';
import { EstatisticaJogador } from '../../../models/EstatisticaJogador';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.scss']
})
export class EstatisticasComponent implements OnInit {
  estatisticas?: EstatisticaJogador;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pontuacaoService: PontuacaoService
  ) {}

  ngOnInit(): void {
    const jogador = this.route.snapshot.paramMap.get('jogador');
    if (jogador) {
      this.pontuacaoService.obterEstatisticas(jogador).subscribe({
        next: (data) => this.estatisticas = data,
        error: () => this.estatisticas = undefined
      });
    }
  }

  voltar(): void {
    this.router.navigate(['/pontuacao/listagem']);
  }
}
