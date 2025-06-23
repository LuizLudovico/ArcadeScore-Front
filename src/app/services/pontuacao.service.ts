import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pontuacao } from '../models/pontuacao';
import { EstatisticaJogador } from '../models/EstatisticaJogador';

@Injectable({
  providedIn: 'root'
})
export class PontuacaoService {
  private readonly API = 'http://localhost:5089/api/Pontuacao';

  constructor(private http: HttpClient) {}

  listar(): Observable<Pontuacao[]> {
    return this.http.get<Pontuacao[]>(`${this.API}/ranking`);
  }

  obterPorJogador(nome: string): Observable<Pontuacao[]> {
    return this.http.get<Pontuacao[]>(`${this.API}/${nome}`);
  }

  registrar(pontuacao: Pontuacao): Observable<Pontuacao> {
    return this.http.post<Pontuacao>(`${this.API}`, pontuacao);
  }

  atualizar(id: string, pontuacao: Pontuacao): Observable<any> {
    return this.http.put(`${this.API}/${id}`, pontuacao);
  }

  remover(id: string): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }

  obterEstatisticas(jogador: string): Observable<EstatisticaJogador> {
  return this.http.get<EstatisticaJogador>(`${this.API}/estatisticas/${jogador}`);
  }
}
