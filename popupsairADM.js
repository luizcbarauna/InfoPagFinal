
    function exibirPopupSair() {
        // Crie um pop-up de confirmação
        var popupSair = document.createElement("div");
        popupSair.style.position = "fixed";
        popupSair.style.background = "bisque";
        popupSair.style.border = "2px solid black";
        popupSair.style.padding = "20px";
        popupSair.style.textAlign = "center";
        popupSair.style.fontFamily = "arial";
        popupSair.style.fontSize = "32px";
        popupSair.style.zIndex = "2";
        popupSair.style.top = "50%";
        popupSair.style.left = "50%";
        popupSair.style.transform = "translate(-50%, -50%)";

        // Crie um div para conter o texto e os botões
        var conteudoPopup = document.createElement("div");

        // Texto "Deseja sair do sistema?"
        var texto = document.createElement("p");
        texto.innerText = "Deseja sair do sistema?";

        // Adicione os botões "Sim" e "Não" ao pop-up
        var botaoSim = document.createElement("button");
        botaoSim.innerText = "Sim";
        botaoSim.style.backgroundColor ="white";
        botaoSim.style.cursor = "pointer";
        botaoSim.style.fontFamily = "arial";
        botaoSim.style.width = "100px";
        botaoSim.style.height = "40px";
        botaoSim.style.fontSize = "24px";
        botaoSim.style.marginRight = "20px";
        botaoSim.addEventListener("mouseover", function(){
                botaoSim.style.backgroundColor = "#0F0F33"
                botaoSim.style.color = "white";
            });
            botaoSim.addEventListener("mouseout", function(){
                botaoSim.style.backgroundColor = "white"
                botaoSim.style.color = "black";
            });


        var botaoNao = document.createElement("button");
        botaoNao.innerText = "Não";
        botaoNao.style.cursor = "pointer";
        botaoNao.style.backgroundColor = "white"
        botaoNao.style.fontFamily = "arial";
        botaoNao.style.width = "100px";
        botaoNao.style.height = "40px";
        botaoNao.style.fontSize = "24px";
        botaoNao.addEventListener("mouseover", function(){
                botaoNao.style.backgroundColor = "#0F0F33"
                botaoNao.style.color = "white";
            });
            botaoNao.addEventListener("mouseout", function(){
                botaoNao.style.backgroundColor = "white"
                botaoNao.style.color = "black";
            });

        // Adicione a ação para sair do sistema ao clicar em "Sim"
        botaoSim.addEventListener("click", function () {
            // Redirecione o usuário para a página de saída (ou realize outra ação)
            window.location.href = "./login.html";
        });

        // Adicione a ação para fechar o pop-up ao clicar em "Não"
        botaoNao.addEventListener("click", function () {
            document.body.removeChild(popupSair);
        });

        // Adicione o texto e os botões ao div de conteúdo
        conteudoPopup.appendChild(texto);
        conteudoPopup.appendChild(botaoSim);
        conteudoPopup.appendChild(botaoNao);

        // Adicione o div de conteúdo ao pop-up
        popupSair.appendChild(conteudoPopup);

        // Adicione o pop-up ao corpo do documento
        document.body.appendChild(popupSair);
        }