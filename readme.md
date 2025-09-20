# 🎮 Desafio: Criando um Jogo do Detona Ralph com JavaScript

## 📌 Sobre o Projeto

Esse projeto faz parte da trilha de aprendizado do Bootcamp da DIO em parceria com a Ri Happy.

O objetivo é criar um jogo simples, onde:

  - Um inimigo aparece em posições aleatórias na tela.
  - O jogador precisa clicar nele para ganhar pontos.
  - O jogo dura até o cronômetro zerar.

> 👉 Para deixar ainda mais didático, foram feitas anotações no código durante as aulas, explicando o passo a passo junto com o professor.

## 📂 Organização de Arquivos

Durante o curso, foi utilizada a pasta `src` (source) para armazenar os arquivos.
Não existe um padrão fixo para organização, mas a minha estrutura pessoal é a seguinte:

```bash
project/
│── index.html
│── css/
│   └── style.css
│── js/
│   └── script.js
│── assets/
│   ├── img/
│   └── audio/
```

**Estrutura**

  - `index.html` → página principal
  - `css/` → apenas arquivos de estilo (ex.: `style.css`)
  - `js/` → apenas arquivos JavaScript (ex.: `script.js`)
  - `assets/` → recursos estáticos (imagens, áudios, etc.)

> 👉 Essa separação ajuda a manter o código e os recursos bem organizados.

## 🧠 O "Cérebro" do Jogo: O Objeto state

O código central do jogo é controlado pelo objeto `state`, que organiza:

  - `view` → elementos HTML
  - `values` → valores do jogo (pontuação, tempo, etc.)
  - `actions` → os motores do jogo (setInterval)

<!-- end list -->

```javascript
const state = {
  view: { ... },      // elementos da tela
  values: { ... },    // valores e dados do jogo
  actions: { ... },   // motores (timers)
};
```

## 🎯 Principais Funções

### `randomSquare()`

  - Remove o inimigo da posição anterior
  - Sorteia uma posição aleatória entre os 9 quadrados
  - Adiciona a classe "enemy"
  - Atualiza `hitPosition`

### `countDown()`

  - Reduz o tempo em 1 segundo
  - Atualiza a tela (`timeLeft`)
  - Quando chega a 0:
      - Para os motores (`clearInterval`)
      - Mostra Game Over com a pontuação

### `addListenerHitBox()`

  - Escuta cliques nos quadrados
  - Se o jogador clicar no quadrado correto (`hitPosition`):
      - Aumenta a pontuação
      - Atualiza a tela
      - Reseta a posição
      - Toca som de acerto

### `initialize()`

  - Ativa os ouvintes de clique (`addListenerHitBox`)
  - Os timers (`setInterval`) já começam automaticamente

## ⚙️ Como o Jogo Funciona

  - O inimigo aparece em posições aleatórias a cada segundo
  - O cronômetro reduz em 1 segundo
  - O jogador deve clicar rápido para marcar pontos
  - Cada acerto aumenta a pontuação
  - O jogo termina quando o tempo chega a zero

## 📚 Conceitos Reforçados

  - Estruturação de projeto (separação de código e recursos)
  - Manipulação do DOM com `querySelector`
  - Uso de `setInterval` e `clearInterval`
  - Organização de variáveis em um objeto `state`
  - Estrutura pai/filho de elementos HTML
  - Interatividade com `addEventListener`

## 🚀 Aprendizados

  - Centralizar o controle do jogo em um objeto (`state`) ajuda na clareza do código
  - Separar o projeto em pastas bem definidas melhora a manutenção
  - Pequenas funções independentes deixam o fluxo mais organizado
  - Importação de fontes externas dá identidade visual ao projeto

> 👉 Esse README serve como guia de estudo e consulta futura para projetos com JavaScript interativo.
