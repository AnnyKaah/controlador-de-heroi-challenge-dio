const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function classificarNivel(xp) {
  if (xp < 1000) return "Ferro";
  else if (xp <= 2000) return "Bronze";
  else if (xp <= 5000) return "Prata";
  else if (xp <= 7000) return "Ouro";
  else if (xp <= 8000) return "Platina";
  else if (xp <= 9000) return "Ascendente";
  else if (xp <= 10000) return "Imortal";
  else return "Radiante";
}

function perguntarHeroi() {
  rl.question('Digite o nome do herói (ou "sair" para encerrar): ', (nome) => {
    if (nome.toLowerCase() === 'sair') {
      console.log('Encerrando o programa. Até mais!');
      rl.close();
      return;
    }

    rl.question('Digite a quantidade de XP do herói: ', (xpInput) => {
      const xp = parseInt(xpInput);

      if (isNaN(xp) || xp < 0) {
        console.log('XP inválido! Por favor, digite um número inteiro maior ou igual a zero.');
        perguntarHeroi();
        return;
      }

      const nivel = classificarNivel(xp);
      console.log(`O Herói de nome ${nome} está no nível de ${nivel}\n`);

      // Pergunta novamente para outro herói
      perguntarHeroi();
    });
  });
}

console.log('=== Classificador de Nível de Herói ===');
perguntarHeroi();