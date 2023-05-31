/* 
1.estructura html: main, h1, h4, select, input, submit, h2x3 con clase hidden, p
2.clases css: hidden para las frases
3.estilos de la web
4.crear constantes: select, input, submit, p(textos), saldo
5.eventos: click sobre jugar
6.funciones: numero aleatorio, si acierta: frase has ganado, se le suma el doble de lo apostado; si pierde: frase has perdido, se le resta lo apostado
*/

'script'

//Variables:
const numberSelect = document.querySelector(".js_select");
const betInput = document.querySelector(".js_betinput");
const playBtn = document.querySelector(".js_submit");
const playText = document.querySelector(".js_ajugar");
const winText = document.querySelector(".js_hasganado");
const loseText = document.querySelector(".js_hasperdido");
let money = document.querySelector(".js_money");


//Funciones:
function balance(){
const winBalance = betInput.value * 2;
console.log(winBalance);
return money.innerHTML = money + winBalance;
}

function compareNumbers(){
    const randomNumber = getRandomNumber(6);
    console.log(randomNumber);
    const userNumber = parseInt(numberSelect.value);
    console.log(userNumber);
    if(userNumber === randomNumber){
        playText.classList.add("hidden");
        winText.classList.remove("hidden");
        loseText.classList.add("hidden");
        balance();
    }else{
        playText.classList.add("hidden");
        winText.classList.add("hidden");
        loseText.classList.remove("hidden");
    }

}

function getRandomNumber(max) {
return Math.ceil(Math.random() * max);

}

function handleClickBtn(event){
    compareNumbers();
}


//Eventos:
playBtn.addEventListener('click', handleClickBtn);