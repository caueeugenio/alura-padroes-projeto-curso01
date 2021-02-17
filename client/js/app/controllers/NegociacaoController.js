class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._InputData = $('#data');
        this._InputQuantidade = $('#quantidade');
        this._InputValor = $('#valor');

        this._ListaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._ListaNegociacoes);
      
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
        
    }

    adiciona(event) {
        event.preventDefault();
        this._ListaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Negociação adicionada com sucesso!";
        this._mensagemView.update(this._mensagem);
        this._negociacoesView.update(this._ListaNegociacoes);
        this._limpaFormulario();
    }
    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._InputData.value),
            this._InputQuantidade.value,
            this._InputValor.value);
    }
    _limpaFormulario() {
        this._InputData.value = '';
        this._InputQuantidade.value = 1;
        this._InputValor.value = 0.0;
        this._InputData.focus();
    }


}