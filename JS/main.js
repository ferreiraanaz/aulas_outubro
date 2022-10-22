function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('rsultado').innerHTML = numero + num;
}
function back(){
    var resultado=
    document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML=
    resultado.substring(0,resultado.length-1);
}
function clean(){
    document.getElementById('rsultado').innerHTML = "";
}
function calcular(){
     var numero = document.getElementById('resultado').innerHTML;
     if(resultado){
         document.getElementById('rsultado').innerHTML = eval(resultado);
     }
     
}}