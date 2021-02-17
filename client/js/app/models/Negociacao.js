

class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
        // this é uma variavel implicita que sempre aponta para a isntancia que esta executando aquela operacao naquele momento
    }

    get Data() {
        return new Date(this._data.getTime());
    }

    get Quantidade() {
        return this._quantidade;
    }

    

    get Valor() {
        return this._valor;
    }
    get Volume() {
        return this._quantidade * this._valor;
    }



    // quando estamos trabalhando com funções dentro de uma classe chamamos de metodo e quando estamos trabalhando com funções fora de uma classe chamamos funções.

}