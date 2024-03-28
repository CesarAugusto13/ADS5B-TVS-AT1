
const dadosEstudante = require('./dadosEstudante');

describe('Teste da função recebeDados', () => {
  test('Verifica se a função processa corretamente o nome "César Augusto de Oliveira Santos" e o RA "190443"', () => {
    const nome = "César Augusto de Oliveira Santos";
    const RA = "190443";
    const esperado = `Dados recebidos - Nome: ${nome}, RA: ${RA}`;

    expect(dadosEstudante(nome, RA)).toBe(esperado);
  });
});
