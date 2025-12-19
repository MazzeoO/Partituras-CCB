// eu vou fazer algumas anotações para estudos. Esse script eu peguei de uma IA, então n considero muito.

fetch ('../_data/hinos.json') // a tag fetch serve para procurar um arquivo.
    .then(response => response.json()) // isso esta fazendo com que o js faça uma conversão para que ele entenda oq esta escrito
    .then(hinos => {
        console.log(hinos)
    
    hinos.forEach(hino => { // forEach serve, por exemplo, a cada item da array ele faz isso, logo se tiver varios hinos, haverá uma coisa para cada.
        console.log(hino.nome)
  

    const card = document.createElement('div'); //aqui eu to criando uma div;
    card.classList.add('card-hino'); // aqui eu to criando uma classe para css
    
    card.innerHTML = ` 
    <h3> Hino ${hino.numero}</h3>
    <p>${hino.nome}</p>
    <span>${hino.tonalidade}</span>
    `; // aqui eu criei cada elemento q fara parte da div

    document
        .getElementById('lista-hinos')
        .appendChild(card)
    });
})