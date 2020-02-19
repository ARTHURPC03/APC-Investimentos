import React from 'react';

const QUESTION_DATA = [
  {
    question: <span>O que é Renda Variável?</span>,
    answers: [
      <span>É um tipo de investimento que sempre dá prejuízo</span>,
      <span>É um tipo de investimento no qual é possível definir o quanto seu dinheiro vai render em determinado período</span>,
      <span>É um tipo de investimento no qual não é possível definir o quanto seu dinheiro vai render em determinado período</span>,
      <span>Nenhuma das alternativas</span>
    ],
    correct: 2
  },
  {
    question: <span>Por que a poupança está dando prejuízo atualmente?</span>,
    answers: [
      <span>Porque a taxa selic subiu</span>,
      <span>Porque poupança está rendendo abaixo da inflação</span>,
      <span>Por que a inflação caiu</span>,
      <span>Nenhuma das alternativas</span>
    ],
    correct: 1
  },
  {
    question: <span>O que são Fundos de Investimento Imobiliário?</span>,
    answers: [
      <span>São fundos que investem em ouro e criptomoedas</span>,
      <span>São fundos de renda fixa, que investem em títulos públicos</span>,
      <span>É um tipo de fundo de investimento que investe em ações de empresas do setor imobiliário</span>,
      <span>É um investimento realizado através da Bolsa de Valores em que o investidor compra 1 ou mais cotas do Fundo e pode ganhar dinheiro com a valorização da cota ou com a distribuição de rendimentos realizada pelo administrador do FII</span>
    ],
    correct: 3
  },
  {
    question: <span>O que é o Buy and Hold?</span>,
    answers: [
      <span>É uma estratégia de investimento que busca obter pequenos ganhos em operações rápidas, realizadas com intervalos de horas ou minutos</span>,
      <span>É uma estratégia de investimento de longo-prazo</span>,
      <span>É uma estratégia de investimento focada em opções</span>,
      <span>Nenhuma das alternativas</span>
    ],
    correct: 1
  },
  {
    question: <span>O que é dividend yield?</span>,
    answers: [
      <span>É um indicador que da uma ideia de quanto o mercado está disposto a pagar pelos lucros da empresa</span>,
      <span>É um indicador que mede a performance da empresa de acordo com os proventos pagos aos seus acionistas</span>,
      <span>É um indicador que mede o valor patrimonial</span>,
      <span>Nenhuma das alternativas</span>
    ],
    correct: 1
  },
  {
    question: <span>Qual o valor mínimo para investir em ações?</span>,
    answers: [
      <span>Um lote é equivalente a 100 ações, o preço mínimo do aporte é R$100</span>,
      <span>Não existe uma cifra mínima para operar na Bolsa</span>,
      <span>R$5.000,00</span>,
      <span>Nenhuma das alternativas</span>
    ],
    correct: 1
  },
  {
    question: <span>O que é uma Holding?</span>,
    answers: [
      <span>Holding é uma uma sociedade gestora matriz de participações sociais, que exerce controle ou “segura” outras empresas</span>,
      <span>São ações da bolsa de valores que representam empresas de grande porte</span>,
      <span>São ações da bolsa de valores que representam empresas pequenas</span>,
      <span>Nenhuma das alternativas</span>
    ],
    correct: 0
  },
  {
    question: <span>Qual desses tipos de investimentos tem a maior chance de rentabilidade?</span>,
    answers: [
      <span>Ações</span>,
      <span>FII's (Fundos Imobiliários)</span>,
      <span>COE</span>,
      <span>Previdência Privada</span>
    ],
    correct: 0
  },
  {
    question: <span>Quais dessas empresas são do setor de energia?</span>,
    answers: [
      <span>BIDI11</span>,
      <span>PETR4</span>,
      <span>TAEE11</span>,
      <span>LREN3</span>
    ],
    correct: 2
  },
  {
    question: <span>Quais dessas empresas são de exploração de imóveis?</span>,
    answers: [
      <span>RAIL3</span>,
      <span>EZTC3</span>,
      <span>GGBR4</span>,
      <span>VVAR3</span>
    ],
    correct: 1
  },
];

export default QUESTION_DATA;
