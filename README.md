# 🏆 Desafio: Classificador de Nível de Herói

 
![Demo do Projeto](images/demo.gif)

Este projeto foi desenvolvido como parte do desafio "Classificador de Nível de Herói" do bootcamp **Ri Happy - Front-end do Zero #2** da [Digital Innovation One (DIO)](https://dio.me/). 

A proposta inicial era criar um script simples para classificar heróis com base em sua experiência (XP). No entanto, decidi evoluir o projeto para uma **aplicação web completa e interativa**, aplicando conceitos avançados de front-end para criar uma experiência de usuário rica, moderna e funcional.

---

## 📜 O Desafio Original

O objetivo era criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói e, em seguida, utilizar uma estrutura de decisão para apresentar uma das seguintes mensagens:

| Nível       | Faixa de XP              |
|-------------|--------------------------|
| Ferro       | Menor que 1.000          |
| Bronze      | Entre 1.001 e 2.000      |
| Prata       | Entre 2.001 e 5.000      |
| Ouro        | Entre 5.001 e 7.000      |
| Platina     | Entre 7.001 e 8.000      |
| Ascendente  | Entre 8.001 e 9.000      |
| Imortal     | Entre 9.001 e 10.000     |
| Radiante    | Maior ou igual a 10.001  |

A saída final deveria ser a mensagem: `"O Herói de nome **{nome}** está no nível de **{nivel}**"`

---

## ✨ Funcionalidades Implementadas (Além do Básico)

Indo além dos requisitos, a aplicação conta com:

- **Interface Gráfica Completa:** Uma UI moderna para adicionar e visualizar os heróis, em vez de um simples script de console.
- **Persistência de Dados:** A lista de heróis é salva no navegador (`localStorage`), garantindo que os dados não sejam perdidos ao recarregar a página.
- **Lista Dinâmica e Interativa:**
    - **Adição com Animação:** Novos heróis são adicionados à lista com uma animação de destaque.
    - **Remoção Individual:** Cada herói pode ser removido individualmente com uma animação de saída suave.
    - **Ordenação da Tabela:** É possível ordenar a lista de heróis por nome ou por XP, em ordem ascendente ou descendente.
- **Experiência do Usuário (UX) Aprimorada:**
    - **Notificações "Toast":** Mensagens de sucesso aparecem no canto da tela ao adicionar um herói.
    - **Modal de Confirmação:** Um modal customizado previne a exclusão acidental da lista inteira.
    - **Validação de Formulário:** O sistema valida os campos para garantir que os dados inseridos sejam corretos.
    - **Guia de Níveis:** Um painel lateral informa o usuário sobre as faixas de XP para cada nível.
- **Design Moderno e Responsivo (UI):**
    - **Fundo Animado:** Um gradiente dinâmico e vibrante no fundo da página.
    - **Glassmorphism:** Efeito de "vidro fosco" no container principal, criando um visual sofisticado.
    - **Rótulos Flutuantes:** Formulários com design moderno que melhoram a usabilidade.
    - **Layout Responsivo:** A interface se adapta perfeitamente a diferentes tamanhos de tela, de desktops a celulares.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **HTML5:** Para a estrutura semântica da página.
- **CSS3:** Para estilização, animações e layout responsivo (utilizando Flexbox e Grid).
- **JavaScript (ES6+):** Para toda a lógica da aplicação, manipulação do DOM e interatividade.
- **Google Fonts:** Para a fonte "Poppins".
- **Font Awesome:** Para os ícones utilizados na interface.

---

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/AnnyKaah/controlador-de-heroi-challenge-dio.git
   ```
2. Navegue até a pasta do projeto.
3. Abra o arquivo `index.html` em seu navegador de preferência.

E pronto! A aplicação estará funcionando.

---

## ✒️ Autor

Desenvolvido por *Anny Karoline*.

-  [**LinkedIn:**](https://www.linkedin.com/in/annykarolinedecarvalhomartins/)
- [**GitHub:**](https://github.com/AnnyKaah)

---
