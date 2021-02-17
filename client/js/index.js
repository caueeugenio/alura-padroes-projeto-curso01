let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
    //array que busca os campos de cada input e armazena em seu respectivo indice [0][1]...
];



let tbody = document.querySelector('table tbody');
// adicionamos o tbody fora do queryselector pra ele nao ter que ficar buscando o tbody a cada requisição...


document.querySelector('.form').addEventListener('submit', (event) => {
    //preventDefault nos previne da pagina recarregar e nao ser exibido o que esperamos
    event.preventDefault();

    //criamos o elemento tr que representa uma linha
    let tr = document.createElement('tr');

    campos.forEach(campo => {
        //criamos o elemento td que representa uma celula
        let td = document.createElement('td');
        //estamos atribuindo o valor de cada campo buscando ao textContent do td criado a cada interação
        td.textContent = campo.value;
        //estamos tornando td filho do elemento tr criado anteriormente
        tr.appendChild(td);
    });

    //criamos outra td que será responsável pelo volume
    let tdVolume = document.createElement('td');

    //estamos atribuindo o valor dos campos qtd e valor multiplicados para se ter o volume (qtd*valor)

    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);
    //agora estamos tornando a nossa tr filha do tbody
    tbody.appendChild(tr);

    //ESTAMOS CRIANDO ESSA TR SEPARADA PQ O CAMPO VOLUME NÃO É UM INPUT QUE PODERIAMOS PEGAR PELO ARRAY ACIMA

});