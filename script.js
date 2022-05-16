function teste(){
    
    var nome = window.prompt("Informe seu nome!")
    var idade = window.prompt("Informe sua idade!")
    window.alert( "Olá," + nome + ". Você tem " + idade + " anos.")
    document.getElementById("info").innerHTML = "Olá," + nome + ". Você tem " + idade + " anos.";

    }
function atividade_01_botao_1(){
    window.alert("Você clicou no botão 1");
}

function atividade_01_botao_2(){
    window.alert("Você clicou no botão 2");
}

function atividade_01_botao_3(){
    window.alert("Você clicou no botão 3");
}

function atividade_02_botao(){
    var nome = window.prompt("Digite seu nome!");
    var idade = window.prompt("Digite sua idade!");
    window.alert("Acabei de conhecer " + nome + ", que tem " + idade + " anos de idade!");

}
function atividade_03_botao(){
    var numero = Number( window.prompt("Digite um numero"));
    var antecessor = numero - 1;
    var sucessor = numero + 1;
    window.alert("O número informado pelo usuário foi " + numero + ". Antes do número " + numero +  ", temos o número " + antecessor + ". Após o número " + numero + ", temos o número " + sucessor + ".");
}
function atividade_04_botao(){
    var produto = ( window.prompt("Nome do produto"));
    var preco = Number( window.prompt("Preço do produto"));
    var dinheiro = Number(window.prompt("valor em dinheiro entregue ao vendedor"));
    var resultado = dinheiro-preco;
    window.alert("“Você comprou um produto " + produto + " por " + preco + " e entregou ao vendedor " + dinheiro + " em dinheiro. Você vai receber R$" + resultado + " de troco. Volte sempre!”.");
}
function atividade_05_botao(){
    var celsius = Number(window.prompt("Temperatura em celsius"));
    var conversao = (celsius * 1.8) + 32;
    window.alert("A temperatura convertida em Fahrenheit é " + conversao + " ºF");
}
function atividade_06_botao(){
    var r$ = Number(window.prompt("Valor em Reais"));
    var dolar = Number(window.prompt("Cotação do dolar atual"));
    var conversao = r$ / dolar;
    window.alert("Sua conversão em dólar é " + conversao);
    document.getElementById("info").innerHTML = "Sua conversão em dólar é " + conversao;
}
function atividade_07_botao(){
    var produto = (window.prompt("Nome do produto"));
    var preco = Number(window.prompt("Preço do produto"));
    var porcetagem = 10;
    var desconto = preco / porcetagem;
    var valorcomdesconto = preco - desconto;
    window.alert("Você comprou um produto " + produto + " por " + preco + " e acaba de ganhar um desconto de 10%. Assim você vai pagar apenas R$" + valorcomdesconto + " pelo seu produto. Volte sempre!");
    document.getElementById("info").innerHTML = "Você comprou um produto " + produto + " por " + preco + " e acaba de ganhar um desconto de 10%. Assim você vai pagar apenas R$" + valorcomdesconto + " pelo seu produto. Volte sempre!";
}
function atividade_08_botao(){
    var tempo = Number(window.prompt("Tempo da viagem"));
    var velocidade = Number(window.prompt("Velocidade média"));
    var distancia = tempo * velocidade;
    var litros_usados = distancia / 12;
    window.alert("Velocidade média é " + velocidade + ". Tempo gasto na viagem é " + tempo + ". Os litros usados são " + litros_usados +".");
    document.getElementById("info").innerHTML = "Velocidade média é " + velocidade + ". Tempo gasto na viagem é " + tempo + ". Os litros usados são " + litros_usados + ".";
}
var soma = 0;
function ssubmit(){
    soma = soma + 1;
    document.getElementById("info").innerHTML = soma;
}
function zerar(){
    soma = 0;
    document.getElementById("info").innerHTML = soma;

}
function atividade_10_botao(){
    numero = Number(window.prompt("Digite um número"));
    quadrado = numero * numero;
    cubo = numero * numero * numero;
    resultado = Math.sqrt(numero);
    resultadocubico = Math.cbrt(numero);
    window.alert("o número digitado foi " + numero + ". O quadrado é " + quadrado + ". O cubo é " + cubo + ". A raiz quadrada é " + resultado + ". A raiz cubica é " + resultadocubico);
    document.getElementById("info").innerHTML = "o número digitado foi " + numero + ". O quadrado é " + quadrado + ". O cubo é " + cubo + ". A raiz quadrada é " + resultado + ". A raiz cubica é " + resultadocubico;
}