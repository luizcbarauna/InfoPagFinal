    

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
textoDadosPessoais.style.fontSize = "30px";
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

// Input CPF
var inputCPF = document.createElement("input");
inputCPF.type = "text";
inputCPF.style.fontFamily = "arial";
inputCPF.style.fontStyle = "normal";
inputCPF.style.width = "225px";
inputCPF.style.height = "30px";
inputCPF.style.fontSize = "20px";
inputCPF.style.position = "absolute";
inputCPF.style.top = "90px"; // Posição superior do primeiro campo de entrada
inputCPF.style.left = "350px"; // Posição esquerda do campo de entrada
inputCPF.placeholder = "009.876.543-21";
inputCPF.style.border = "2px solid";

// Input Nome
var inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.style.fontFamily = "arial";
inputNome.style.fontStyle = "normal";
inputNome.style.width = "225px";
inputNome.style.height = "30px";
inputNome.style.fontSize = "20px";
inputNome.style.position = "absolute";
inputNome.style.top = (90 + distanciaVertical) + "px"; // Calcula a posição com base na distância vertical
inputNome.style.left = "350px";
inputNome.placeholder = "Lauro Albuquerque";
inputNome.style.border = "2px solid";

// Input Cargo
var inputCargo = document.createElement("input");
inputCargo.type = "text";
inputCargo.style.fontFamily = "arial";
inputCargo.style.fontStyle = "normal";
inputCargo.style.width = "225px";
inputCargo.style.height = "30px";
inputCargo.style.fontSize = "20px";
inputCargo.style.position = "absolute";
inputCargo.style.top = (90 + 2 * distanciaVertical) + "px"; // Calcula a posição com base na distância vertical
inputCargo.style.left = "350px";
inputCargo.placeholder = "Gerente";
inputCargo.style.border = "2px solid";

// Input Email
var inputEmail = document.createElement("input");
inputEmail.type = "text";
inputEmail.style.fontFamily = "arial";
inputEmail.style.fontStyle = "normal";
inputEmail.style.width = "225px";
inputEmail.style.height = "30px";
inputEmail.style.fontSize = "20px";
inputEmail.style.position = "absolute";
inputEmail.style.top = (90 + 3 * distanciaVertical) + "px"; // Calcula a posição com base na distância vertical
inputEmail.style.left = "350px";
inputEmail.placeholder = "lauroalb@institucional.com";
inputEmail.style.border = "2px solid";
                
                
               
    
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
                botaoTrocarSenha.addEventListener("mouseover", function(){
                    botaoTrocarSenha.style.backgroundColor = "#0F0F33"
                    botaoTrocarSenha.style.color = "white";
             });
             botaoTrocarSenha.addEventListener("mouseout", function(){
                botaoTrocarSenha.style.backgroundColor = "white"
                botaoTrocarSenha.style.color = "black";
             });
                



                botaoTrocarSenha.onclick = function(){
                    window.location.href = "./novasenha.html"
                }

                // Crie um botão "Salvar"
                var botaoSalvar = document.createElement("button");
                botaoSalvar.innerText = "Salvar";
                botaoSalvar.style.cursor = "pointer"; //ALterar o mouse
                botaoSalvar.style.fontFamily = "arial";
                botaoSalvar.style.backgroundColor = "white";
                botaoSalvar.style.color = "blackl";
                botaoSalvar.style.width = "180px"; // Largura do botão "Consultar"
                botaoSalvar.style.height = "40px"; // Altura do botão "Consultar"
                botaoSalvar.style.fontSize = "20px"; // Tamanho da fonte do botão "Consultar"
                botaoSalvar.style.fontStyle = "normal";
                botaoSalvar.style.position = "absolute";
                botaoSalvar.style.top = "400px"; // Posição superior do botão "Consultar"
                botaoSalvar.style.right = "50px"; // Posição esquerda do botão "Consultar"
                botaoSalvar.style.whitespace = "nowrap";
                botaoSalvar.addEventListener("mouseover", function(){
                    botaoSalvar.style.backgroundColor = "#0F0F33"
                    botaoSalvar.style.color = "white";
             });
             botaoSalvar.addEventListener("mouseout", function(){
                botaoSalvar.style.backgroundColor = "white";
                botaoSalvar.style.color = "black";
             });

                //pop up cadastro criado!
               
               
                botaoSalvar.addEventListener("click", function () {
                    
                    // Crie um pop-up de "Cadastro Realizado"
                    var PopupCadastroCriado = document.createElement("div");
                    PopupCadastroCriado.style.position = "fixed";
                    PopupCadastroCriado.style.background = "white";
                    PopupCadastroCriado.style.border = "2px solid black";
                    PopupCadastroCriado.style.padding = "20px";
                    PopupCadastroCriado.style.textAlign = "center";
                    PopupCadastroCriado.style.fontFamily = "arial";
                    PopupCadastroCriado.style.fontSize = "32px";
                    PopupCadastroCriado.style.zIndex = "2";
                    PopupCadastroCriado.style.top = "50%";
                    PopupCadastroCriado.style.left = "50%";
                    PopupCadastroCriado.style.transform = "translate(-50%, -50%)";
                    PopupCadastroCriado.innerText = "Cadastro atualizado!";

                    // Adicione o pop-up ao corpo do documento
                    document.body.appendChild(PopupCadastroCriado);

                    // Feche o pop-up após alguns segundos
                    setTimeout(function () {
                        document.body.removeChild(PopupCadastroCriado);
                    }, 1000); // O pop-up será removido após 3 segundos (1000 milissegundos)
                    });




                // Crie um botão "Cancelar"
                // Adicione o botão "Cancelar"
var botaoCancelar = document.createElement("button");
botaoCancelar.innerText = "Cancelar";
botaoCancelar.style.backgroundColor = "white";
botaoCancelar.style.color = "black";
botaoCancelar.style.cursor = "pointer";
botaoCancelar.style.fontFamily = "arial";
botaoCancelar.style.width = "180px";
botaoCancelar.style.height = "40px";
botaoCancelar.style.fontSize = "20px";
botaoCancelar.style.fontStyle = "normal";
botaoCancelar.style.position = "absolute";
botaoCancelar.style.top = "400px";
botaoCancelar.style.right = "250px";
botaoCancelar.style.whitespace = "nowrap";
botaoCancelar.addEventListener("mouseover", function () {
  botaoCancelar.style.backgroundColor = "#0F0F33";
  botaoCancelar.style.color = "white";
});
botaoCancelar.addEventListener("mouseout", function () {
  botaoCancelar.style.backgroundColor = "white";
  botaoCancelar.style.color = "black";
});

botaoCancelar.addEventListener("click", function (event) {
  // Crie um pop-up de "Descartar Alterações?"
  var popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.background = "bisque";
  popup.style.border = "2px solid black";
  popup.style.padding = "20px";
  popup.style.textAlign = "center";
  popup.style.fontFamily = "arial";
  popup.style.fontSize = "32px";
  popup.style.zIndex = "2";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";

  // Texto "Descartar Alterações?"
  var texto = document.createElement("p");
  texto.innerText = "Descartar Alterações?";

  // Adicione o texto ao pop-up
  popup.appendChild(texto);

  // Crie um div para conter os botões "Cancelar" e "Confirmar"
  var divBotoes = document.createElement("div");

  // Adicione os botões "Cancelar" e "Confirmar" ao pop-up
  var botaoCancelarPopup = document.createElement("button");
  botaoCancelarPopup.innerText = "Cancelar";
  botaoCancelarPopup.style.backgroundColor = "white";
  botaoCancelarPopup.style.cursor = "pointer";
  botaoCancelarPopup.style.fontFamily = "arial";
  botaoCancelarPopup.style.width = "100px";
  botaoCancelarPopup.style.height = "40px";
  botaoCancelarPopup.style.fontSize = "19px";
  botaoCancelarPopup.style.marginRight = "20px";
  botaoCancelarPopup.addEventListener("mouseover", function () {
    botaoCancelarPopup.style.backgroundColor = "#0F0F33";
    botaoCancelarPopup.style.color = "white";
  });
  botaoCancelarPopup.addEventListener("mouseout", function () {
    botaoCancelarPopup.style.backgroundColor = "white";
    botaoCancelarPopup.style.color = "black";
  });

  var botaoConfirmarPopup = document.createElement("button");
  botaoConfirmarPopup.innerText = "Confirmar";
  botaoConfirmarPopup.style.backgroundColor = "white";
  botaoConfirmarPopup.style.cursor = "pointer";
  botaoConfirmarPopup.style.fontFamily = "arial";
  botaoConfirmarPopup.style.width = "100px";
  botaoConfirmarPopup.style.height = "40px";
  botaoConfirmarPopup.style.fontSize = "19px";
  botaoConfirmarPopup.addEventListener("mouseover", function () {
    botaoConfirmarPopup.style.backgroundColor = "#0F0F33";
    botaoConfirmarPopup.style.color = "white";
  });
  botaoConfirmarPopup.addEventListener("mouseout", function () {
    botaoConfirmarPopup.style.backgroundColor = "white";
    botaoConfirmarPopup.style.color = "black";
  });

  // Adicione a ação para fechar o pop-up ao clicar em "Confirmar"
  botaoConfirmarPopup.addEventListener("click", function (event) {
    // Limpar o conteúdo de todos os inputs
    inputNome.value = "";
    inputCPF.value = "";
    inputCargo.value = "";
    inputEmail.value = "";
    

    document.body.removeChild(popup);
    event.stopPropagation(); // Impede a propagação do evento de clique
  });

  // Adicione a ação para fechar o pop-up ao clicar em "Cancelar"
  botaoCancelarPopup.addEventListener("click", function (event) {
    document.body.removeChild(popup); // Fecha o pop-up "Descartar Alterações"
    event.stopPropagation(); // Impede a propagação do evento de clique
  });

  // Adicione os botões ao div de botões
  divBotoes.appendChild(botaoCancelarPopup);
  divBotoes.appendChild(botaoConfirmarPopup);

  // Adicione o div de botões ao pop-up
  popup.appendChild(divBotoes);

  // Adicione o pop-up ao corpo do documento
  document.body.appendChild(popup);
});


        
                // Adicione os elementos ao retângulo
                retangulo3.appendChild(textoNome);
                retangulo3.appendChild(textoCPF);
                retangulo3.appendChild(textoDadosPessoais);
                retangulo3.appendChild(textoCargo);
                retangulo3.appendChild(textoEmail);
                retangulo3.appendChild(inputCPF);
                retangulo3.appendChild(inputNome);
                retangulo3.appendChild(inputCargo);
                retangulo3.appendChild(inputEmail);
                retangulo3.appendChild(botaoTrocarSenha);
                retangulo3.appendChild(botaoSalvar);
                retangulo3.appendChild(botaoCancelar);
                
                
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
        
        
