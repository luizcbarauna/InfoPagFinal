
            
            var retangulo2 = null;
            document.getElementById("consultarRendimento").addEventListener("click", function() {
                
                
                if (retangulo2 === null) {
                // Crie um elemento div para representar o retângulo
                retangulo2 = document.createElement("div");
        
                // Aplique estilos ao retângulo, incluindo posição
                retangulo2.style.width = "1362px";
                retangulo2.style.height = "487px";
                retangulo2.style.backgroundColor = "white";
                retangulo2.style.border = "2px solid black";
                retangulo2.style.position = "absolute"; // Defina a posição absoluta
                retangulo2.style.top = "450px"; // Ajuste conforme necessário, para posicioná-lo abaixo dos botões
                retangulo2.style.left = "250px"; // Ajuste conforme necessário
                
                // Crie um elemento de parágrafo para o texto
                var texto = document.createElement("p");
                texto.innerText = "Selecione o período que deseja:";
                texto.style.fontFamily = "arial";
                texto.style.fontSize = "30px"; 
                texto.style.position = "absolute";
                texto.style.textAlign = "left";
                texto.style.top = "120px";
                texto.style.left = "20px";
    
                // Crie um elemento de parágrafo para o texto "Veja aqui seus rendimentos"
                var textoRendimentos = document.createElement("p");
                textoRendimentos.innerText = "Veja aqui seu rendimento:";
                textoRendimentos.style.fontSize = "32px"; // Tamanho da fonte
                textoRendimentos.style.fontWeight = "bold"; // Deixa o texto em negrito
                textoRendimentos.style.fontFamily = "arial";
                textoRendimentos.style.position = "absolute"; // Defina a posição 
                textoRendimentos.style.textAlign = "left"; // Alinhar o texto ao centro
                textoRendimentos.style.top = "-10px"; // Ajuste conforme necessário
                textoRendimentos.style.left = "20px";
    
                // Crie um elemento de parágrafo para o texto "Matrícula"
                var textoCPF = document.createElement("p");
                textoCPF.innerText = "CPF:";
                textoCPF.style.fontFamily = "arial";
                textoCPF.style.fontSize = "32px"; // Tamanho da fonte do texto
                textoCPF.style.textAlign = "left"; // Alinhar o texto ao centro
                textoCPF.style.position = "absolute"; // Defina a posição absoluta
                textoCPF.style.top = "55px"; // Ajuste conforme necessário
                textoCPF.style.left = "20px";
                
                // Crie um elemento de parágrafo para o texto "Matrícula"
                var textoCPFADMCPF = document.createElement("p");
                textoCPFADMCPF.innerText = "123.456.789-00";
                textoCPFADMCPF.style.fontFamily = "arial";
                textoCPFADMCPF.style.fontSize = "30px"; // Tamanho da fonte do texto
                textoCPFADMCPF.style.textAlign = "left"; // Alinhar o texto ao centro
                textoCPFADMCPF.style.position = "absolute"; // Defina a posição absoluta
                textoCPFADMCPF.style.top = "58px"; // Ajuste conforme necessário
                textoCPFADMCPF.style.left = "100px"; 
                
                       
                
                // Crie um botão para selecionar o ano
                var botaoAno = document.createElement("select");
                botaoAno.innerText = "Ano";
                botaoAno.style.cursor = "pointer"; //ALterar o mouse
                botaoAno.style.fontFamily = "arial";
                botaoAno.style.fontStyle = "normal";
                botaoAno.style.textAlign = "center";
                botaoAno.style.padding = ""
                botaoAno.style.width = "150px"; // Largura do botão de ano
                botaoAno.style.height = "40px"; // Altura do botão de ano
                botaoAno.style.fontSize = "20px"; // Tamanho da fonte do botão de ano
                botaoAno.style.position = "absolute";
                botaoAno.style.top = "150px"; // Posição superior do botão de ano
                botaoAno.style.left = "450px"; // Posição esquerda do botão de ano
                botaoAno.className = "year-selector"; // Adicione a classe de estilo
                for (var i = new Date().getFullYear(); i >= 2013; i--) {
                var option = document.createElement("option");
                option.value = i;
                option.text = i;
                botaoAno.appendChild(option);
                 }
                
        
                // Crie um botão "Consultar"
                var botaoConsultar = document.createElement("button");
                botaoConsultar.innerText = "Consultar";
                botaoConsultar.style.backgroundColor = "white";
                botaoConsultar.style.color = "black";
                botaoConsultar.style.cursor = "pointer"; //ALterar o mouse
                botaoConsultar.style.fontFamily = "arial";
                botaoConsultar.style.width = "180px"; // Largura do botão "Consultar"
                botaoConsultar.style.height = "40px"; // Altura do botão "Consultar"
                botaoConsultar.style.fontSize = "20px"; // Tamanho da fonte do botão "Consultar"
                botaoConsultar.style.fontStyle = "normal";
                botaoConsultar.style.position = "absolute";
                botaoConsultar.style.top = "150px"; // Posição superior do botão "Consultar"
                botaoConsultar.style.left = "650px"; // Posição esquerda do botão "Consultar"
                botaoConsultar.addEventListener("mouseover", function(){
                botaoConsultar.style.backgroundColor = "#0F0F33"
                botaoConsultar.style.color = "white";
            });
            botaoConsultar.addEventListener("mouseout", function(){
                botaoConsultar.style.backgroundColor = "white"
                botaoConsultar.style.color = "black";
            });

                // ...


// ...

// Adicione um evento de clique ao botão "Consultar"
botaoConsultar.onclick = function() {
    // Abrir uma nova página em branco com a largura e altura da tela do monitor
    var larguraTela = window.screen.width;
    var alturaTela = window.screen.height;
    var novaPagina = window.open("", "_blank", "width=" + larguraTela + ",height=" + alturaTela);

    // Aplicar estilos personalizados à nova página
    novaPagina.document.documentElement.style.background = "white";
    novaPagina.document.body.style.display = "flex";
    novaPagina.document.body.style.flexDirection = "column";
    novaPagina.document.body.style.justifyContent = "center";
    novaPagina.document.body.style.alignItems = "center";
    novaPagina.document.body.style.position = "relative";

    // Adicionar imagem PNG à nova página
    var imagemPNG = novaPagina.document.createElement("img");
    imagemPNG.src = "rendimentojoao.png"; // Substitua pelo caminho real da sua imagem
    imagemPNG.style.width = "auto"; // Largura ajustada automaticamente para manter a proporção
    imagemPNG.style.maxHeight = "80%"; // Altura máxima da imagem
    imagemPNG.style.maxWidth = "80%"; // Largura máxima da imagem

    // Criar botão "Salvar"
var botaoSalvar = novaPagina.document.createElement("button");
botaoSalvar.innerText = "Salvar";
botaoSalvar.style.marginRight = "10px"; // Espaço à direita do botão "Salvar"
botaoSalvar.style.width = "120px"; // Largura do botão "Salvar"
botaoSalvar.style.height = "50px"; // Altura do botão "Salvar"
botaoSalvar.style.fontSize = "18px"; // Tamanho da fonte do botão "Salvar"
botaoSalvar.style.fontWeight = "bold"; // Negrito
botaoSalvar.style.fontFamily = "'Lusitana', sans-serif"; // Fonte "Lusitana", sans-serif

// Adicionar evento de clique ao botão "Salvar"
botaoSalvar.onclick = function() {
    // Criar um link temporário para fazer o download da imagem
    var link = novaPagina.document.createElement("a");
    link.href = imagemPNG.src;
    link.download = "rendimentojoao.png";
    link.click();
};

// Criar botão "Imprimir"
var botaoImprimir = novaPagina.document.createElement("button");
botaoImprimir.innerText = "Imprimir";
botaoImprimir.style.width = "120px"; // Largura do botão "Imprimir"
botaoImprimir.style.height = "50px"; // Altura do botão "Imprimir"
botaoImprimir.style.fontSize = "18px"; // Tamanho da fonte do botão "Imprimir"
botaoImprimir.style.fontWeight = "bold"; // Negrito
botaoImprimir.style.fontFamily = "'Lusitana', sans-serif"; // Fonte "Lusitana", sans-serif

// Adicionar evento de clique ao botão "Imprimir"
botaoImprimir.onclick = function() {
    // Remover os botões antes de imprimir
    divBotoes.style.display = "none";

    // Chamar a função de impressão da página
    novaPagina.print();

    // Restaurar a exibição dos botões após a impressão
    divBotoes.style.display = "flex";
};

    // Criar div para os botões e aplicar estilos de layout
    var divBotoes = novaPagina.document.createElement("div");
    divBotoes.style.display = "flex";
    divBotoes.style.position = "absolute";
    divBotoes.style.bottom = "20px"; // Posição inferior da div de botões
    divBotoes.style.left = "10px"; // Posição esquerda da div de botões
    divBotoes.style.width = "150px";
    divBotoes.style.height = "40px";

    // Adicione a imagem à nova página
    novaPagina.document.body.appendChild(imagemPNG);

    // Adicione os botões à div de botões
    divBotoes.appendChild(botaoSalvar);
    divBotoes.appendChild(botaoImprimir);

    // Adicione a div de botões à nova página
    novaPagina.document.body.appendChild(divBotoes);
};


            // Adicione o botão "Consultar" ao corpo do documento
             document.body.appendChild(botaoConsultar);
        
                // Adicione os elementos ao retângulo
                retangulo2.appendChild(texto);
                retangulo2.appendChild(textoCPF);
                retangulo2.appendChild(textoRendimentos);
                retangulo2.appendChild(textoCPFADMCPF);
                retangulo2.appendChild(botaoAno);
                retangulo2.appendChild(botaoConsultar);
                
                
                // Adicione o retângulo ao DOM (por exemplo, ao final do corpo do documento)
                document.body.appendChild(retangulo2);
                } else {
                // Se o retângulo já está aberto, remova-o
                document.body.removeChild(retangulo2);
                retangulo2 = null;
                }
                
                // Adicione event listeners para capturar cliques fora do retângulo e do botão
        document.addEventListener("click", function(event) {
            if (retangulo2 && !retangulo2.contains(event.target) && event.target !== document.getElementById("consultarRendimento")) {
                document.body.removeChild(retangulo2);
                retangulo2 = null; // Defina a variável retangulo como nulo para que o retângulo seja recriado se o botão for clicado novamente
            }
        });
            });
