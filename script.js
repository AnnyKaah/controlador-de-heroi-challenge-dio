const nomeInput = document.getElementById('nome');
const xpInput = document.getElementById('xp');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnLimpar = document.getElementById('btnLimpar');
const listaHerois = document.getElementById('listaHerois');
const thead = listaHerois.querySelector('thead');
const tbody = listaHerois.querySelector('tbody');
const msgErro = document.getElementById('msgErro');
const toast = document.getElementById('toast-notification');

// Elementos do Modal
const confirmModal = document.getElementById('confirm-modal');
const btnModalCancel = document.getElementById('modal-btn-cancel');
const btnModalConfirm = document.getElementById('modal-btn-confirm');

let sortState = { column: null, direction: 'asc' }; // 'asc' ou 'desc'

// Carrega os heróis do localStorage ou inicia um array vazio
const herois = JSON.parse(localStorage.getItem('listaDeHerois')) || [];

document.addEventListener('DOMContentLoaded', atualizarTabela);

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

function limparErro() {
  msgErro.textContent = '';
}

function mostrarErro(texto) {
  msgErro.textContent = texto;
}

function showToast(message) {
  toast.innerHTML = message;
  toast.classList.add('show');

  // Esconde o toast após 3 segundos
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function salvarHerois() {
  // Salva o array de heróis no localStorage
  localStorage.setItem('listaDeHerois', JSON.stringify(herois));
}

function updateSortIcons() {
  document.querySelectorAll('th[data-sort]').forEach(th => {
    const icon = th.querySelector('.sort-icon');
    icon.classList.remove('fa-sort-up', 'fa-sort-down');
    icon.classList.add('fa-sort');

    if (th.dataset.sort === sortState.column) {
      icon.classList.remove('fa-sort');
      const directionClass = sortState.direction === 'asc' ? 'fa-sort-up' : 'fa-sort-down';
      icon.classList.add(directionClass);
    }
  });
}

function atualizarTabela() {
  tbody.innerHTML = '';
  herois.forEach(({nome, xp, nivel}, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${nome}</td>
      <td>${xp}</td>
      <td>${nivel}</td>
      <td><button class="btn-remover" data-index="${index}"><i class="fa-solid fa-trash-can"></i> Remover</button></td>
    `;
    tbody.appendChild(tr);
  });
  if (herois.length) {
    listaHerois.classList.remove('hidden');
  } else {
    listaHerois.classList.add('hidden');
  }
}

btnAdicionar.addEventListener('click', () => {
  limparErro();
  const nome = nomeInput.value.trim();
  const xp = parseInt(xpInput.value);

  if (!nome) {
    mostrarErro('Por favor, digite o nome do herói.');
    return;
  }
  if (isNaN(xp) || xp < 0) {
    mostrarErro('Por favor, digite um valor válido para XP (número inteiro maior ou igual a zero).');
    return;
  }

  const nivel = classificarNivel(xp);
  herois.push({nome, xp, nivel});

  salvarHerois();

  // Exibe a notificação de sucesso
  showToast(`O Herói de nome <strong>${nome}</strong> está no nível de <strong>${nivel}</strong>`);
  atualizarTabela();

  // Animação para a nova linha
  const lastRow = tbody.querySelector('tr:last-child');
  if (lastRow) {
    lastRow.classList.add('new-hero');
    // Remove a classe após a animação para que possa ser re-adicionada
    setTimeout(() => {
      lastRow.classList.remove('new-hero');
    }, 1500); // Duração da animação
  }

  // Limpar inputs para próxima entrada
  nomeInput.value = '';
  xpInput.value = '';
  nomeInput.focus();
});

btnLimpar.addEventListener('click', () => {
  if (herois.length > 0) {
    confirmModal.classList.remove('hidden');
  }
});

function closeModal() {
  confirmModal.classList.add('hidden');
}

btnModalCancel.addEventListener('click', closeModal);

btnModalConfirm.addEventListener('click', () => {
  herois.length = 0; // Limpa o array
  salvarHerois(); // Atualiza o localStorage
  atualizarTabela();
  limparErro();
  nomeInput.value = '';
  xpInput.value = '';
  nomeInput.focus();
  closeModal();
});

// Fecha o modal se o usuário clicar no overlay
confirmModal.addEventListener('click', (e) => {
  if (e.target === confirmModal) closeModal();
});

tbody.addEventListener('click', (e) => {
  const removeButton = e.target.closest('.btn-remover');
  if (removeButton) {
    const rowToRemove = removeButton.closest('tr');
    const index = parseInt(removeButton.dataset.index, 10);

    rowToRemove.classList.add('removing');

    // Espera a animação terminar antes de remover os dados e redesenhar
    setTimeout(() => {
      herois.splice(index, 1); // Remove o herói do array
      salvarHerois(); // Atualiza o localStorage
      atualizarTabela(); // Atualiza a tabela para reajustar índices
    }, 500); // Deve corresponder à duração da animação
  }
});

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th[data-sort]');
  if (!th) return;

  const column = th.dataset.sort;

  // Define a direção da ordenação
  if (sortState.column === column) {
    sortState.direction = sortState.direction === 'asc' ? 'desc' : 'asc';
  } else {
    sortState.column = column;
    sortState.direction = 'asc';
  }

  // Ordena o array
  herois.sort((a, b) => {
    const valA = a[column];
    const valB = b[column];
    const direction = sortState.direction === 'asc' ? 1 : -1;

    if (typeof valA === 'string') {
      return valA.localeCompare(valB) * direction;
    } else {
      return (valA - valB) * direction;
    }
  });

  updateSortIcons();
  atualizarTabela();
});