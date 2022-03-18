var contatos = ["Giseli: 333333","Ana: 111111", "Pedro: 222222", "Gustavo: 444444", "Gaby: 555555", "Aline: 666666"]
var para = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button')

btn.addEventListener('click',function(){
    var procurarNome= input.value;
    input.value= '';
    input.focus();
    for (var i=0; i<contatos.length; i++){
         var splitContatos= contatos[i].split(':');
         if(splitContatos[0]===procurarNome){
            para.textContent= splitContatos[0]+ `O nome é `+splitContatos[1]+'.';
             break    
         }   else {
            para.textContent= "contato não encontrado";
         }
        }   
    })