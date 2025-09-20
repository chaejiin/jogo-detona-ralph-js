const state = {
  view: {
    squares: document.querySelectorAll(".square"), // Todos os 9 quadrados
    enemy: document.querySelector(".enemy"), //O elemento do inimigo
    timeLeft: document.querySelector("#time-left"), // Onde mostra o tempo
    score: document.querySelector("#score"), // Onde mostra a pontuação
  },

  // Valores e dados do jogo
  values: {
    gameVelocity: 1000, //Velocidade com que o inimigo se move (1000ms = 1s)
    hitPosition: 0, // ID do quadrado onde o inimigo está
    result: 0,  // Pontuação atual
    curretTime: 60, // Tempo inicial em segundos
  },
  // Ações ou "motores" do jogo (os temporizadores)
  actions: {
    timerId: setInterval(randomSquare, 1000),
    countDownTimerId: setInterval(countDown, 1000),
  },
};

function countDown() {
  // 1. Diminui o tempo em 1 segundo.
  state.values.curretTime--;
  // 2. Atualiza o tempo na tela para o jogador ver.
  state.view.timeLeft.textContent = state.values.curretTime;

  // 3. Verifica se o tempo acabou.
  if (state.values.curretTime <= 0) {
    // 4. Se o tempo zerou, o jogo PARA.
    //    Isso é feito "desarmando" os dois setIntervals com clearInterval.
    clearInterval(state.actions.countDownTimerId); // Para o cronômetro
    clearInterval(state.actions.timerId);  // Para de mover o inimigo
    alert("Game Over! O seu resultado foi: " + state.values.result);
  }
}

function playSound(audioName) {
  let audio = new Audio(`./src/audios/${audioName}.m4a`);
  audio.volume = 0.2;
  audio.play();
}

function randomSquare() {
  // 1. Limpa o tabuleiro: remove o inimigo de onde ele estava antes.
  state.view.squares.forEach((square) => {
    square.classList.remove("enemy");
  });

  // 2. Sorteia uma nova posição: escolhe um número aleatório de 0 a 8.
  let randomNumber = Math.floor(Math.random() * 9);
  // 3. Pega o quadrado sorteado na lista de quadrados.
  let randomSquare = state.view.squares[randomNumber];
  // 4. Coloca a classe "enemy" no novo quadrado para ele aparecer na tela.
  randomSquare.classList.add("enemy");
  // 5. Guarda a posição do inimigo para saber onde o jogador precisa clicar.
  state.values.hitPosition = randomSquare.id;
}

//Essa função prepara o tabuleiro para receber os cliques do jogador. Ela não é chamada repetidamente, apenas uma vez no início.
function addListenerHitBox() {
   // Para cada um dos 9 quadrados...
  state.view.squares.forEach((square) => {
    // ...adicione um "ouvinte" de clique do mouse.
    square.addEventListener("mousedown", () => {
      // Quando um quadrado for clicado, verifique:
      // O ID do quadrado clicado é o mesmo onde o inimigo está?
      if (square.id === state.values.hitPosition) {
         // Se for, parabéns!
        state.values.result++; // Aumenta a pontuação
        state.view.score.textContent = state.values.result; //"Zera" a posição para evitar pontos duplicados
        state.values.hitPosition = null; // Toca um som de acerto
        playSound("hit");
      }
    });
  });
}

function initialize() {
  addListenerHitBox();
}

initialize(); //Quando a página carrega, initialize() é chamada, que por sua vez chama addListenerHitBox() para deixar os quadrados clicáveis. Ao mesmo tempo, os setIntervals definidos lá no objeto state já começam a rodar, fazendo o tempo correr e o inimigo se mover.
