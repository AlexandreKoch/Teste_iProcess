function questao_2a(arr){
    var retorno = false
    var saida = []
	
    for (let i = 0; i <arr.length; i++) {
        if (arr[i]%2 === 0) {
            saida.push(2*arr[i])
        } else {
            saida.push(arr[i])
        }
        
        if (arr[i] > 50) {
            var retorno = true
        }
    }

    console.log(saida);
    console.log('Retorno: ' + retorno);

    if (retorno){
        return true
    }
}

function questao_2b(arr){
    var retorno = false
    var saida = []

    for (let i = 0; i <arr.length; i++) {
        if (arr[i]%2 !== 0) {
            saida.push(2*arr[i])
        } else {
            saida.push(arr[i])
        }
        
        if (arr[i] > 40) {
            var retorno = true
        }
    }

    console.log(saida);
    console.log('Retorno: ' + retorno);
    
    if (retorno){
        return true
    }
}

const array1 = [35, 40, 45, 50, 55]
console.log('Questão 2a: \n[' + array1 + ']');
questao_2a(array1);

const array2 = [30, 35, 40, 45, 50]
console.log('Questão 2b: \n[' + array2 + ']');
questao_2b(array2);