//alert('Alerta!!!!')

//console.log('Alerta!!!!');

//array 
//let nomes = ['gabriel', 'Ana', 'Marcos']


let email = 'lordkasthyel@gmail.com'
// let age = 30

let nome = 'luan'
let segundoNome = 'braga'

let nomeCompleto = nome + ' ' + segundoNome

let nomeCompletoNovo = `${nome} ${segundoNome}`

//console.log(email.indexOf('@'));

//['gabriel', 'gmail.com']

let emailDivido = email.split ('@')

//console.log(emailDivido[0]);

//Number

//+ - * / ** %

//console.log(3 ** 3);


let likes = 25; 

likes += + 1
likes = likes + 1


//console.log(++likes);



//boolean


//> Maior
//< Menor
//>= Maior igual
//<= Menor Igual
//== igual
//!= diferente
// (true/false)
//const age = 16;
let senha = '1234'
//> < >= <= == /=

//if ( true/false )
if(senha.length <= 6) {
    console.log(' Senha deve ter mais que 6 car..'); 
}else {
    console.log ('Senha cadastrada');
}

//Criança até 18
// adulto ate 60
//Idoso +60


//const idade = 12

//let isMaiorDeIdade = idade >= 18;

//if(idade < 18 ) {
    //console.log('Criança');
//} else if (idade <60) {
    //console.log ('adulto')    
//}else{//console.log('idoso')
//}






"Nome: Gabriel; Idade: 25"

let nomes = ['Gabriel', 'ana', 'pedro']

let idades = [25,12,45]

for (let i = 0; i < nomes.length; i++) {

    const nome = nomes[i];
    const idade = idades [i];
    alert(`Nome:${nome}; Idade:${idade}`)

}