function criptografar() {
    const texto = document.querySelector('.conteudo__texto').value.toLowerCase().trim();
    const chave = document.querySelector('.conteudo__input__palavra').value.toLowerCase().replace(/\s/g, '');

    let novoTexto = [];
    let chaveRepetida;

    for (i = 0; i < texto.length; i++)
        novoTexto.push(removeCharInvalido(texto[i]));

    chaveRepetida = repetePalavraChave(novoTexto, chave);

    cifrar(novoTexto, chaveRepetida);

    document.querySelector('.conteudo__texto').value = ''; 
}



function descriptografar(){

    const texto = document.querySelector('.conteudo__texto').value.toLowerCase().trim();
    const chave = document.querySelector('.conteudo__input__palavra').value.toLowerCase().replace(/\s/g, ''); 
   
    let novoTexto = [];
    let chaveRepetida;

    for(i = 0 ; i < texto.length; i++)
        novoTexto.push(removeCharInvalido(texto[i]));

    chaveRepetida = repetePalavraChave(novoTexto, chave); 


    decifrar(novoTexto, chaveRepetida); 


}


function cifrar(texto, chave){

    let cifrado = [];
    let charCodes = []; 
     
    for (i = 0; i < texto.length; i++) {
        if(texto[i].charCodeAt(0) >= 97 && texto[i].charCodeAt(0) <= 122){
            charCodes.push((((texto[i].charCodeAt(0) - 97) + ((chave[i].charCodeAt(0) - 97))) % 26) + 97);
        }
        else{
            charCodes.push(' '); 
        }
    }


    for (i = 0; i < texto.length; i++) {
        if(charCodes[i] != ' '){
            cifrado.splice(i, 1, String.fromCharCode(charCodes[i])); 
        }
        else{
            cifrado.push(' ');
        }
    }

document.querySelector('.conteudo__saida').innerHTML = cifrado.join('');

}


function decifrar(texto, chave){
    let decifrado = [];
    let charCodes = []; 
    


    for (i = 0; i < texto.length; i++) {
        if(texto[i].charCodeAt(0) >= 97 && texto[i].charCodeAt(0) <= 122){
            charCodes.push((((texto[i].charCodeAt(0) - 97) - (chave[i].charCodeAt(0) - 97) + 26) % 26) + 97);
        }
        else{
            charCodes.push(' '); 
        }
    }


    for(i = 0 ; i < texto.length ; i++){
        if(charCodes[i] != ' '){
            decifrado.splice(i, 1, String.fromCharCode(charCodes[i])); 
        }
        else{
            decifrado.push(' ');
        }
    }

document.querySelector('.conteudo__saida').innerHTML = decifrado.join('');


}

function copiar(){
    const txtCopiado = document.querySelector('.conteudo__saida').innerText;
    navigator.clipboard.writeText(txtCopiado);
}



function repetePalavraChave(texto, chave){
    let repChars = [];
    let cont = 0;


    for(i = 0 ; i < texto.length; i++){

      
      if((texto[i].charCodeAt(0) >= 97 && texto[i].charCodeAt(0) <= 122)){            
            repChars.push(chave[cont % chave.length]);
        }
        else{
            cont--;
            repChars.push(' ');
        }
        cont++; 
    
    }
        
        
    return repChars;
}


function removeCharInvalido(letraRecebida){

   switch(letraRecebida){

       case 'ã':
       case 'á':
           return 'a';

       case 'é':
           return 'e';

       case 'í':
           return 'i';

       case 'ó':
       case 'õ':
           return 'o';

       case 'ú':
           return 'u';
       
        case 'ç':
           return 'c';
        
        
        default:
            return letraRecebida; 
   }
   
 } 