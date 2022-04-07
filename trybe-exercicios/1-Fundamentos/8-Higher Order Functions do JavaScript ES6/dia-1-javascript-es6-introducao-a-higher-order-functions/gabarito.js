const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkQuesito = (gabarito, respostaDoAluno) => gabarito === respostaDoAluno ? true : false;

const corrigeTeste = (gabarito, respostaDoAluno, checaResposta) => {
  let nota = 0;
  for (let index =0; index <= gabarito.length; index +=1){
    if (checaResposta(gabarito[index],respostaDoAluno[index])) nota += 1;
    else if (respostaDoAluno[index] !== 'N.A') nota -= 0.5;
  }
  return nota;
}

console.log(corrigeTeste(RIGHT_ANSWERS, STUDENT_ANSWERS, checkQuesito));

