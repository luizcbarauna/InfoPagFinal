 

var retangulo3 = null;
            document.getElementById("consultarDadosPessoais").addEventListener("click", function() {
                
                
                
                if (retangulo3 === null) {
                // Crie um elemento div para representar o retângulo
                retangulo3 = document.createElement("div");
                

                // Aplique estilos ao retângulo, incluindo posição
                retangulo3.style.width = "1362px";
                retangulo3.style.height = "487px";
                retangulo3.style.backgroundColor = "white";
                retangulo3.style.border = "2px solid black";
                retangulo3.style.position = "absolute"; // Defina a posição absoluta
                retangulo3.style.top = "450px"; // Ajuste conforme necessário, para posicioná-lo abaixo dos botões
                retangulo3.style.left = "250px"; // Ajuste conforme necessário
                
                
        
                
                // Crie um elemento de parágrafo para o texto "Dados pessoais:"
                var distanciaVertical = 55; // Distância vertical entre os textos

// Texto Dados pessoais
var textoDadosPessoais = document.createElement("p");
textoDadosPessoais.innerText = "Dados pessoais:";
textoDadosPessoais.style.fontSize = "32px";
textoDadosPessoais.style.fontWeight = "bold";
textoDadosPessoais.style.fontFamily = "arial";
textoDadosPessoais.style.position = "absolute";
textoDadosPessoais.style.textAlign = "left";
textoDadosPessoais.style.top = "-10px"; // Posição superior do primeiro texto
textoDadosPessoais.style.left = "20px";

// Texto CPF
var textoCPF = document.createElement("p");
textoCPF.innerText = "CPF:";
textoCPF.style.fontFamily = "arial";
textoCPF.style.fontSize = "30px";
textoCPF.style.textAlign = "left";
textoCPF.style.position = "absolute";
textoCPF.style.top = (10 + distanciaVertical) + "px"; // Calcula a posição com base na distância vertical
textoCPF.style.left = "20px";

// Texto Nome
var textoNome = document.createElement("p");
textoNome.innerText = "Nome:";
textoNome.style.fontFamily = "arial";
textoNome.style.fontSize = "30px";
textoNome.style.position = "absolute";
textoNome.style.textAlign = "left";
textoNome.style.top = (10 + 2 * distanciaVertical) + "px"; // Calcula a posição com base na distância vertical
textoNome.style.left = "20px";

// Texto Cargo
var textoCargo = document.createElement("p");
textoCargo.innerText = "Cargo:";
textoCargo.style.fontFamily = "arial";
textoCargo.style.fontSize = "30px";
textoCargo.style.position = "absolute";
textoCargo.style.textAlign = "left";
textoCargo.style.top = (5 + 3 * distanciaVertical) + "px"; // Calcula a posição com base na distância vertical
textoCargo.style.left = "20px";

// Texto Email
var textoEmail = document.createElement("p");
textoEmail.innerText = "E-mail institucional:";
textoEmail.style.fontFamily = "arial";
textoEmail.style.fontSize = "30px";
textoEmail.style.position = "absolute";
textoEmail.style.textAlign = "left";
textoEmail.style.top = (10 + 4 * distanciaVertical) + "px"; // Calcula a posição com base na distância vertical
textoEmail.style.left = "20px";

                
                
                
//Input CPF
var distanciaVertical = 55; // Distância vertical entre os campos de entrada

// Texto CPF
var textoFuncionarioCPF = document.createElement("p");
textoFuncionarioCPF.innerText = "123.456.789-00";
textoFuncionarioCPF.style.fontFamily = "arial";
textoFuncionarioCPF.style.fontSize = "30px";
textoFuncionarioCPF.style.textAlign = "left";
textoFuncionarioCPF.style.position = "absolute";
textoFuncionarioCPF.style.top = "60px"; 
textoFuncionarioCPF.style.left = "350px";

// Texto Nome
var textoFuncionarioNome = document.createElement("p");
textoFuncionarioNome.innerText = "João da Silva";
textoFuncionarioNome.style.fontFamily = "arial";
textoFuncionarioNome.style.fontSize = "30px";
textoFuncionarioNome.style.position = "absolute";
textoFuncionarioNome.style.textAlign = "left";
textoFuncionarioNome.style.top = "118px"; 
textoFuncionarioNome.style.left = "350px";


// Texto Cargo
var textoFuncionarioCargo = document.createElement("p");
textoFuncionarioCargo.innerText = "Desenvolvedor";
textoFuncionarioCargo.style.fontFamily = "arial";
textoFuncionarioCargo.style.fontSize = "30px";
textoFuncionarioCargo.style.position = "absolute";
textoFuncionarioCargo.style.textAlign = "left";
textoFuncionarioCargo.style.top = "168px"; 
textoFuncionarioCargo.style.left = "350px";

// Texto Email
var textoFuncionarioEmail = document.createElement("p");
textoFuncionarioEmail.innerText = "joaods@institucional.com";
textoFuncionarioEmail.style.fontFamily = "arial";
textoFuncionarioEmail.style.fontSize = "30px";
textoFuncionarioEmail.style.position = "absolute";
textoFuncionarioEmail.style.textAlign = "left";
textoFuncionarioEmail.style.top = "230px"; 
textoFuncionarioEmail.style.left = "350px";

                
                // Crie um botão "Trocar Senha"
                var botaoTrocarSenha = document.createElement("button");
                botaoTrocarSenha.innerText = "Trocar Senha";
                botaoTrocarSenha.style.cursor = "pointer"; //ALterar o mouse
                botaoTrocarSenha.style.fontFamily = "arial";
                botaoTrocarSenha.style.width = "180px"; // Largura do botão "Consultar"
                botaoTrocarSenha.style.height = "40px"; // Altura do botão "Consultar"
                botaoTrocarSenha.style.fontSize = "32px"; // Tamanho da fonte do botão "Consultar"
                botaoTrocarSenha.style.fontStyle = "normal";
                botaoTrocarSenha.style.position = "absolute";
                botaoTrocarSenha.style.top = "400px"; // Posição superior do botão "Consultar"
                botaoTrocarSenha.style.left = "730px"; // Posição esquerda do botão "Consultar"
                botaoTrocarSenha.style.whitespace = "nowrap";
                botaoTrocarSenha.style.backgroundColor = "white"; 
                botaoTrocarSenha.style.color = "black";
                botaoTrocarSenha.style.fontFamily = "arial";
                botaoTrocarSenha.style.fontSize = "20px";
                botaoTrocarSenha.style.left = "20px"
                botaoTrocarSenha.addEventListener("mouseover", function(){
                    botaoTrocarSenha.style.backgroundColor = "#0F0F33"
                    botaoTrocarSenha.style.color = "white";
             });
             botaoTrocarSenha.addEventListener("mouseout", function(){
                botaoTrocarSenha.style.backgroundColor = "white"
                botaoTrocarSenha.style.color = "black";
             });
                botaoTrocarSenha.onclick = function(){
                    window.location.href = "./novasenhaFunc.html"
                }         
                // Adicione os elementos ao retângulo
                retangulo3.appendChild(textoNome);
                retangulo3.appendChild(textoCPF);
                retangulo3.appendChild(textoDadosPessoais);
                retangulo3.appendChild(textoCargo);
                retangulo3.appendChild(textoEmail);
                retangulo3.appendChild(textoFuncionarioCPF);
                retangulo3.appendChild(textoFuncionarioNome);
                retangulo3.appendChild(textoFuncionarioCargo);
                retangulo3.appendChild(textoFuncionarioEmail);
                retangulo3.appendChild(botaoTrocarSenha);
                
                
                
                // Adicione o retângulo ao DOM (por exemplo, ao final do corpo do documento)
                document.body.appendChild(retangulo3);
                } else {
                // Se o retângulo já está aberto, remova-o
                document.body.removeChild(retangulo3);
                retangulo3 = null;
                }
                // Adicione event listeners para capturar cliques fora do retângulo e do botão
                document.addEventListener("click", function(event) {
                if (retangulo3 && !retangulo3.contains(event.target) && event.target !== document.getElementById("consultarDadosPessoais")) {
                document.body.removeChild(retangulo3);
                retangulo3 = null; // Defina a variável retangulo como nulo para que o retângulo seja recriado se o botão for clicado novamente
                }
             });
            });


