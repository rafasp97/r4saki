
var altura = 0, largura = 0

function tamanhoTela(){ //função para definir a área q o 'alvo' deve aparecer
    altura = window.innerHeight
    largura = window.innerWidth
}

tamanhoTela()

//CRIANDO O ELEMENTO (IMAGEM) NO JAVASCRIPT
var numero = 1
var pontos = 0

function yasuoAleatoria(){
    //REMOVE O ELEMENTO (CASO ELE JA EXISTA) --> utilizado para garantir que haja somente 1 elemento por vez
    if(document.getElementById('yasuoID')){ //ou seja, se houver retorno desse ID
        document.getElementById('yasuoID').remove() //ele é removido
        //ele sendo removido pela função, significa que não houve clique e há perda de vida
        //alterando para coração vazio
        if(numero > 3){
            //armazena o valor de pontos
            localStorage.setItem('total', pontos)
            window.location.href = "derrota.html"
        }
        else{
            document.getElementById('v' + numero).src = "imagens/coracao_vazio.png"
            numero++
        }
    }


    //CRIANDO O ELEMENTO
    var yasuo = document.createElement('img') 
    document.body.appendChild(yasuo)
    yasuo.src= 'imagens/yasuo.png'
    yasuo.id = 'yasuoID'


    //GERANDO UMA POSIÇÃO ALEATÓRIA NO ESPAÇO DA TELA
    var posicaoX = Math.round(Math.random() * largura) - 200 //200 é um decremento para não quebrar a barra de rolagem
    var posicaoY = Math.round(Math.random() * altura) - 200

    if(posicaoX < 0){ // impede que a imagem vá para uma área em que não pode ser clicada
        posicaoX = 0
    }
    if(posicaoY < 0){ 
        posicaoY = 0
    }

    yasuo.style.left = posicaoX + 'px'
    yasuo.style.top = posicaoY + 'px'
    yasuo.style.position = 'absolute'


    //ADICIONANDO TAMANHOS ALEATÓRIOS
    var tamanho = ( Math.random() * 100 ) + 80

    if(tamanho > 170){ //controla o tamanho máximo do elemento
        tamanho = 100
    }

    yasuo.style.height = tamanho + 'px'
    yasuo.style.width = tamanho + 'px'


    //CONFIGURANDO LADO DA IMAGEM (ESQUERDA/DIREITA)
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0: 
            yasuo.className = 'esquerda'
            break;
        case 1: 
            yasuo.className = 'direita'
            break;
    }

    //JOGO

    //CLIQUE NO ELEMENTO 
    yasuo.onclick = function(){
        this.remove()
        pontos++
        mostrarPontos()
    } 
}


function teemoAleatoria(){
        //REMOVE O ELEMENTO (CASO ELE JA EXISTA) --> utilizado para garantir que haja somente 1 elemento por vez
        if(document.getElementById('teemoID')){ //ou seja, se houver retorno desse ID
            document.getElementById('teemoID').remove() //ele é removido
        }
    
    
        //CRIANDO O ELEMENTO
        var teemo = document.createElement('img') 
        document.body.appendChild(teemo)
        teemo.id = 'teemoID'
        teemo.src= 'imagens/teemo.png'
    
    
        //GERANDO UMA POSIÇÃO ALEATÓRIA NO ESPAÇO DA TELA
        var posicaoX = Math.round(Math.random() * largura) - 200 //200 é um decremento para não quebrar a barra de rolagem
        var posicaoY = Math.round(Math.random() * altura) - 200
    
        if(posicaoX < 0){ // impede que a imagem vá para uma área em que não pode ser clicada
            posicaoX = 0
        }
        if(posicaoY < 0){ 
            posicaoY = 0
        }
    
        teemo.style.left = posicaoX + 'px'
        teemo.style.top = posicaoY + 'px'
        teemo.style.position = 'absolute'
    
    
        //ADICIONANDO TAMANHOS ALEATÓRIOS
        var tamanho = ( Math.random() * 100 ) + 80
    
        if(tamanho > 170){ //controla o tamanho máximo do elemento
            tamanho = 100
        }
    
        teemo.style.height = tamanho + 'px'
        teemo.style.width = tamanho + 'px'
    
    
        //CONFIGURANDO LADO DA IMAGEM (ESQUERDA/DIREITA)
        var classe = Math.floor(Math.random() * 2)
        switch(classe){
            case 0: 
                teemo.className = 'esquerda'
                break;
            case 1: 
                teemo.className = 'direita'
                break;
        }
    
        //JOGO
    
        //CLIQUE NO ELEMENTO (redução de vidas)
        teemo.onclick = function(){
            this.remove()
            //caso ele seja clicado, perde vida
            //alterando para coração vazio
            if(numero > 3){
                window.location.href = "derrota.html"
             }
             else{
                 document.getElementById('v' + numero).src = "imagens/coracao_vazio.png"
                 numero++
             }
        }
}


function poro(){

    //CRIANDO O ELEMENTO
    var poro = document.createElement('img') 
    document.body.appendChild(poro)
    poro.id = 'poroID'
    poro.src= 'imagens/poro.gif'


    //GERANDO UMA POSIÇÃO ALEATÓRIA NO ESPAÇO DA TELA
    var posicaoX = Math.round(Math.random() * largura) - 200 //200 é um decremento para não quebrar a barra de rolagem
    var posicaoY = Math.round(Math.random() * altura) - 200

    if(posicaoX < 0){ // impede que a imagem vá para uma área em que não pode ser clicada
        posicaoX = 0
    }
    if(posicaoY < 0){ 
        posicaoY = 0
    }

    poro.style.left = posicaoX + 'px'
    poro.style.top = posicaoY + 'px'
    poro.style.position = 'absolute'


    //ADICIONANDO TAMANHOS ALEATÓRIOS
    var tamanho = ( Math.random() * 100 ) + 80

    if(tamanho > 150){ //controla o tamanho máximo do elemento
        tamanho = 100
    }

    poro.style.height = tamanho + 'px'
    poro.style.width = tamanho + 'px'


    //CONFIGURANDO LADO DA IMAGEM (ESQUERDA/DIREITA)
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0: 
            poro.className = 'esquerda'
            break;
        case 1: 
            poro.className = 'direita'
            break;
    }

    //JOGO

    //CLIQUE NO ELEMENTO (restaura vidas)
    poro.onclick = function(){
        this.remove()
        //caso ele seja clicado, devolve todas vidas perdidas vida
        document.getElementById('v1').src = "imagens/coracao_cheio.png"
        document.getElementById('v2').src = "imagens/coracao_cheio.png"
        document.getElementById('v3').src = "imagens/coracao_cheio.png"
        numero = 1
    }

    //FUNÇÃO PRA REMOVER O PORO A CADA 1 SEGUNDO
    setTimeout(function(){
        if(document.getElementById('poroID')){
            document.getElementById('poroID').remove()
        }
    }, 1500)
}


function mostrarPontos(){
    //remove o placar do valor anterior
   var resultadoAnterior = document.getElementById('resultadoID')
   if(resultadoAnterior){
        resultadoAnterior.remove()
   }

    //adiciona um novo valor para o placar
    var resultado = document.createElement('span') 
    resultado.textContent = pontos
    resultado.id = 'resultadoID'
    document.body.appendChild(resultado)

    //estilo da pontuação
    resultado.className = 'pontos'
    
}

function placar(){
    var total = localStorage.getItem('total')
    //adiciona um novo valor para o placar
    resultado = document.createElement('span') 
    resultado.textContent = total
    resultado.id = 'resultadoID'
    document.body.appendChild(resultado)

    //estilo da pontuação
    resultado.className = 'pontos2'

}

function jogar(){
    window.location.href = "app.html"
}

function paginaInicial(){
    window.location.href = "jogo.html"
}