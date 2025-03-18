document.addEventListener('DOMContentLoaded', function){
    const aumentaFonteBotao = document.getElementByld('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuiFonteBotao');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function){
         tamanhoAtualFonte+=0.1;
         DocumentFragment.body.style.fontSize = '${tamanhoAtualFonte}rem';

    })/;

    diminuiFonteBotao.addEventListener('click', function){
        tamanhoAtualFonte-=0.1;
        document.body.style.fontSize= '${tamanhoAtualFonte}rem';
    });
    });
}