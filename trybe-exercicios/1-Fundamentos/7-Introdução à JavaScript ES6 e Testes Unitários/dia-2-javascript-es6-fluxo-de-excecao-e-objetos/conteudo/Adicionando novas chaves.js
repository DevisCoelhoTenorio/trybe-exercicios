const criar = (objeto, nome1, valor1) => {
  const objeto1 = {};
  objeto1.nome = nome1;
  objeto1.valor = valor1;
  objeto = objeto1;
  
  console.log(objeto);
};

criar ('cadastro', 'devis', 30);