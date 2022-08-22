//8 Cada espectador de um cinema respondeu a um questionário 
// ótim: 3
// bom: 2
//regular: 1
// Faça um programa que receba a idade a opiniã de 115 espectadores analisando
// a média das idades das pessoas que responderam ótimo;
// a quantidade de pessoas que responderam regular;
// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados

let pesquisas = [1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,]
let idades = [10,60,30,20,23,10,60,30,20,23,10,60,30,20,23]

let totalRespostaOtimo = 0;
let respostaOtimo = 0




// Soma todos os valores do array
for (let i = 0; i < pesquisas.length; i++) {
    const pesquisa = pesquisas [i];
    if(pesquisa == 3){
        totalIdadeOtimo = totalIdadeOtimo + idades[i]
        respostaOtimo++
    }

}

const mediaOtimo = totalIdadeOtimo / respostaOtimo;

//alert (À média de pessoas que responderam ótimo é ${mediaOtimo})
//alert ('O numero de pessoas que responderam regular é ${mediarRegular}')
//alert(`A porcentagem de pessoas que responderam bom é ${(respostaBom*100)/pesquisas.lenght})