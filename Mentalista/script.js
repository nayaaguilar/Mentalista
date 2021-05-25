const btn_start = document.querySelector('.start');
const btn_try = document.querySelector('#try');
const porcentagem = document.querySelector('input#porcentagem');
const tela1 = document.querySelector('.main');
const tela2 = document.querySelector('.main2');
const texto = document.querySelector('p#texto_jogo');
const tentativa = document.querySelector('#tentativa');
const text_erro = document.querySelector('.erro');
const text_acerto = document.querySelector('.acerto');
const btn_restart = document.querySelector('#play_again');

var numero = 0;

btn_start.onclick = () => {
    
    tela1.style.display = 'none';
    tela2.style.display = 'block';
//aqui eu usei porcentagem para poder escolher de 0 à diversas possibilidades de números 
    numero = Math.floor(Math.random() * 100/porcentagem.value)

    texto.innerHTML = `Escolha um nÚmero de 0 à ${parseInt(100/porcentagem.value-1)}`;

}
btn_try.onclick = () => {
    if(tentativa.value == numero){
        text_erro.style.display = 'none';
        text_acerto.style.display = 'block';

        btn_try.style.display = 'none';
        btn_restart.style.display = 'initial';
    }else{

        if(tentativa.value < numero){
            text_erro.innerHTML = 'Você errou, chute mais alto &#8593;';
        }else{
            text_erro.innerHTML = 'Você errou, chute mais baixo &#8595;';
        }
// if = se 
// else = senão
        text_acerto.style.display = 'none';
        text_erro.style.display = 'block';
    }
}

//ações de start e restart
btn_restart.onclick = () => {
    
    btn_try.style.display = 'initial';
    btn_restart.style.display = 'none';
    text_acerto.style.display = 'none';
    tela2.style.display = 'none';
    tela1.style.display = 'block';

}