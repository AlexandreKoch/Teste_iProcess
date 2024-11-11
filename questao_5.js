function questao_5a(input1) {
    console.log('Questão 5a:')
    var output1 = ''
    for (let i = 0; i < input1.length; i++) {
        if (input1[i] !== '0' && input1[i] !== '1') {
            console.log('String inválida! \nInforme uma string composta apenas por zeros e uns.')
            return false
        } else if (i === 0) {
            var contador = 1
            output1 = contador.toString() + input1[i].toString()
        } else if (input1[i] === input1[i-1]) {
            var contador = contador + 1
            output1 = output1.slice(0, -2)
            output1 = output1 + contador.toString() + input1[i].toString()
        } else {
            var contador = 1
            output1 = output1 + contador.toString() + input1[i].toString()
        }
    }
    console.log(input1 + ' -> ' + output1)
    return true
}

function questao_5b(input2) {
    console.log('Questão 5b:')
    var output2 = ''
    if (input2.length % 2 !== 0 ){
        console.log('String inválida! \nInforme uma string com quantidade par de caracteres.')
            return false
    }
    for (let i = 0; i < input2.length; i++) {
        if (i%2 === 0) {
            for (let j = 0; j < input2[i]; j++) {
                output2 = output2 + input2[i+1]
            }
        }
    }
    console.log(input2 + ' -> ' + output2)
    return true
}

var input1 = '111001';
var input2 = '11102120';
questao_5a (input1);
questao_5b (input2);