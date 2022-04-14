const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

  const juntaArray = names.reduce((acc, valor) => `${acc}${valor}`);
  
  function containsA(names) {
    const unificar = names.toLowerCase();
    let contador = 0;
    for (let index = 0; index < names.length; index += 1) {
        if ( unificar[index] === 'a' ) contador += 1;
    };
    return contador;
  };

  console.log(containsA(juntaArray));