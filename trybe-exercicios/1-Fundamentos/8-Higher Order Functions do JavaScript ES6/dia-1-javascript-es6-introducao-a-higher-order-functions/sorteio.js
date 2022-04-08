const check = (numeroSorteado, numeroEscolhido) => numeroEscolhido === numeroSorteado ? 'Parabéns você ganhou' : 'Tente novamente';

const sorteio = (numeroEscolhido) => {
  const numeroSorteado = Math.floor(Math.random() * 5) +1;
  
  return (`O numero Sorteado foi: ${numeroSorteado}, ${check (numeroSorteado, numeroEscolhido)}`);
}
console.log(sorteio(5));

