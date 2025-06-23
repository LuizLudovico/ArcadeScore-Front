import { Component, OnInit } from '@angular/core';
import { PontuacaoService } from '../../../services/pontuacao.service';
import { Pontuacao } from '../../../models/pontuacao';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  pontuacoes: Pontuacao[] = [];
  displayedColumns: string[] = ['jogador', 'pontos', 'dataPartida'];

  constructor(private pontuacaoService: PontuacaoService) {}

    ngOnInit(): void {
    this.pontuacaoService.listar().subscribe({
      next: (data) => {
        this.pontuacoes = data;
      },
      error: (err) => {
        console.error('Erro ao buscar ranking:', err);
      }
    });
  }
}
