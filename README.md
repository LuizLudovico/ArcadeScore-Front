
# 🎮 ArcadeScoreFront

Interface web do projeto **ArcadeScore**, desenvolvida em **Angular** para visualização, registro e análise de pontuações de jogadores em partidas de fliperama.

---

## 🚀 Tecnologias Utilizadas

- Angular 10
- TypeScript
- Angular Material
- RxJS
- SCSS
- HTTPClient (para comunicação com a API)
- Estrutura modular com Lazy Loading

---

## 📦 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/LuizLudovico/ArcadeScoreFront.git
cd ArcadeScoreFront
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
ng serve
```

Acesse no navegador: `http://localhost:4200`

---

## 🖥️ Funcionalidades

- 📊 Listagem das 10 maiores pontuações
- 🧮 Estatísticas individuais por jogador
- 📝 Registro de novas pontuações
- ✏️ Edição e exclusão de pontuações existentes
- 🔁 Integração com API RESTful backend

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── pontuacao/         # Módulo de pontuações
│   │   ├── listagem/      # Tela de ranking
│   │   ├── formulario/    # Tela de registro/edição
│   │   └── estatisticas/  # Tela com estatísticas do jogador
│   ├── core/              # Serviços e modelos
│   └── app-routing.module.ts
├── assets/
├── environments/
└── index.html
```

---

## 🌐 Comunicação com o Backend

A API esperada está em execução no endereço:

```http
http://localhost:5089/api/Pontuacao
```

Certifique-se de que o backend esteja rodando antes de utilizar o front.

---

## 📌 Comandos úteis

```bash
# Compilar para produção
ng build --prod

# Executar testes unitários
ng test

# Executar testes E2E
ng e2e
```

---

## 👨‍💻 Autor

**Luiz Ludovico Machado**  
Candidato à vaga .NET + Angular | GitHub: [@LuizLudovico](https://github.com/LuizLudovico)

---

> Projeto desenvolvido como parte de uma avaliação técnica - 2025 🚀
