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