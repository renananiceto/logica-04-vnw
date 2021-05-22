
// 1 - crie uma função que exiba uma mensagem no console

function r (){
    console.log(`bom dia `)
}
r()

// 2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function e (nome){
    console.log(`Meu nome é ${nome}`)
}
e ('renan')

// 3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console

    function n (nome1, idade, musica){
        console.log(`meu nome é ${nome1} tenho ${idade} anos, gosto de escutar musica ${musica}`)
    }
    n('renan', 60, 'classica')

// 4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console

    function a( filme1, musica2 ){
        console.log(`meu filme favorito é ${filme1} e minha musica favorita é ${musica2}`)
    }

    a ('Interstellar', 'The Game is Afoot')

// 5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

    function na (n1){
        return  n1 *3;
    }
    console.log(na(1))