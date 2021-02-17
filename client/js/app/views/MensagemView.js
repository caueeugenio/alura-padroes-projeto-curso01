class MensagemView extends View{

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return model.texto ? `<p class="text-center alert alert-info">${model.texto}</p>` : '</p></p>';
        //if ternario
        /*
        _outro exemplo_
          if(model.texto != null){
            return  `<p class="text-center alert alert-info">${model.texto}</p>`;
        }else{
            return `<p></p>`;
           
        }
        
        */
    }

   
}