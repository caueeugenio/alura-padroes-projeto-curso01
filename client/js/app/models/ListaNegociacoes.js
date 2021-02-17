class ListaNegociacoes {
    
    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get Negociacoes() {
        return [].concat(this._negociacoes);
        //estamos retornando uma copia de negociacoes
    }


}