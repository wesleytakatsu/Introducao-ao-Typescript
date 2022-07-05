console.log('Treino TypeScript');

function soma(a, b) {
    return a + b;
}

console.log( soma( 1 , 2 ) );

function somatipo(a: number, b: number){

    return a + b;
}

console.log( somatipo ( 5 , 10) );
// Vai dar um erro de tipo:
// soma('1', 'b');



/*
    TRABALHANDO COM TYPES E INTERFACES
*/
//  types
//  interfaces

//  CRIANDO A INTERFACE
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    //executarRugido(alturaEmDecibeis: number): void;
}

//  EXTENDENDO A INTERFACE
interface IFelino extends IAnimal{
    visaoNoturna: boolean,
    //executarRugido: (alturaEmDecibeis) => ('${alturaEmDecibeis}dB')
}

//  USANDO A INTERFACE BASE
const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
}

//  USANDO A INTERFACE EXTENDIDA
const felino: IFelino = {
    nome: 'gatinho',
    tipo: 'terrestre',
    visaoNoturna: true
}


//  TRABALHANDO COM TYPE

interface IAnimall {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface ICaninoo extends IAnimall{
    porte: 'pequeno' | 'medio' | 'grande';
}

interface IFelinoo extends IAnimall{
    visaoNoturna: boolean,
}

type IDomesticoo = IFelino | ICaninoo;


const animall: IDomesticoo = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre'
}



/*
    TRATANDO A TAG INPUT
*/

//  Podemos buscar referências nesse site:
//  https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement

//  Desse jeito não dá pra executar métodos específicos do input
//  const input = document.getElementById('input');

//  Desse jeito podemos ter acesso a métodos específicos do input
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    console.log('Digitei!');
    //  PARA APARECER TODOS OS MÉTODOS 
});


//  PEGANDO OS DADOS DO CAMPO EM TEMPO REAL
const inputt = document.getElementById('inputt') as HTMLInputElement;

inputt.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
    //  PARA APARECER TODOS OS MÉTODOS 
});





//
//      GENERIC TYPES
//


//      A FUNÇÃO SERIA ASSIM, MAS QUANDO NÃO SABEMOS O TIPO QUE A VARIÁVEL VAI RECEBER COMUMENTE NOMEAMOS A VARIÁVEL DE "T"
//      function adicionaApendiceALista<NaoSei>(array: any[], valor: NaoSei){
//         return array.map(item => item + valor);
//      }

function adicionaApendiceALista<T>(array: any[], valor: T){
    return array.map(item => item + valor);
}
//  SE OBSERVAR O VSCODE MOSTRA O RESULTADO ABAIXO COMO "NUMBER"
adicionaApendiceALista([1,2,3], 1);

function adicionaApendiceALista2<T>(array: any[], valor: T){
    return array.map(item => item + valor);
}
//  SE OBSERVAR O VSCODE MOSTRA O RESULTADO ABAIXO COMO "STRING"
adicionaApendiceALista2(['A','B','C'], 'A');