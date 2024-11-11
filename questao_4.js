function questao_4(produto, marca, valor) {
    
    if (valor < 5) {
        if (marca !== 'A' || marca !== 'B' || marca !== 'C') {
            if (produto === 'AB' || produto === 'BA') {
                var statusProduto = false;
            }
        }
    } else if (produto[0] === produto[1] && valor > 10 && valor < 30) {
        var statusProduto = false;
    } else if (marca === 'A' || valor > 50) {
        var statusProduto = false;
    } else {
        var statusProduto = true;
    }

    console.log(statusProduto)
    return statusProduto
}

var produto = 'AC';
var marca = 'B';
var valor = 20;
questao_4(produto, marca, valor);