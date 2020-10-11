const quadradoStatus = [
    {
        id: 1,
        preenchido: false,
        simbolo: 'sim-1',
    }, 
    {
        id: 2,
        preenchido: false,
        simbolo: 'sim-2',
    },
    {
        id: 3,
        preenchido: false,
        simbolo: 'sim-3',
    },
    {
        id: 4,
        preenchido: false,
        simbolo: 'sim-4',
    },
    {
        id: 5,
        preenchido: false,
        simbolo: 'sim-5',
    },
    {
        id: 6,
        preenchido: false,
        simbolo: 'sim-6',
    },
    {
        id: 7,
        preenchido: false,
        simbolo: 'sim-7',
    },
    {
        id: 8,
        preenchido: false,
        simbolo: 'sim-8',
    },
    {
        id: 9,
        preenchido: false,
        simbolo: 'sim-9',
    }
]

// Sistema Seletor
var quadradoQuery = [];
for(let x = 0; x < 9; x++) {
    quadradoStatus[x].seletor = document.querySelector("#quadrado" + String(x+1));
    quadradoQuery.push(quadradoStatus[x].seletor);
    quadradoClick(quadradoStatus[x].id);
    
}

// Ao clicar em algum quadrado

function quadradoClick(quadradoId) {
    quadradoQuery[quadradoId-1].addEventListener("click", () => { 
        Preenchimento(quadradoStatus[quadradoId-1].id, false) 
    })
}

// Sistema de Preenchimento
function Preenchimento(quadradoId, resetar) {
    if(resetar == true) {
        resetarRodada();
    } else if(quadradoStatus[quadradoId-1].preenchido == true) {
        console.error("Quadrado " + quadradoId + " Já foi preenchido!") 
    } else {
        quadradoStatus[quadradoId-1].preenchido = true;
        Rodada(quadradoId);
    } 
}

// Sistema de Rodada

let rodada = 0;
let rodadaIcone;
function Rodada(quadradoId) {
    this.quadradoId = quadradoId;
    alterarRodada(rodada);
    rodada++;
    function alterarRodada(rodada) {
        if((rodada%2)==0) {
            rodadaIcone = "bola";
            simboloRodada(rodadaIcone, this.quadradoId);
        } else {
            rodadaIcone = "x";
            simboloRodada(rodadaIcone, this.quadradoId);
            
        }
    }
    function simboloRodada(rodadaIcone, quadradoId) {
        var simboloQuadrado = quadradoStatus[quadradoId-1].simbolo = rodadaIcone;
        if(simboloQuadrado == "x") {
            var quadradoAlterar = document.querySelector("#" + String(rodadaIcone) + "-" + String(quadradoId))
            quadradoAlterar.style.display = "block";
            verificarGanhador(rodadaIcone)
        } else if(simboloQuadrado == "bola") {
            var quadradoAlterar = document.querySelector("#" + String(rodadaIcone) + "-" + String(quadradoId))
            quadradoAlterar.style.display = "block";
            verificarGanhador(rodadaIcone)
        }
    }
    
}
function resetarRodada() {
    rodada = 0;
    for(let x = 0; x < 9; x++) {
        if(quadradoStatus[x].simbolo == "x") {
            quadradoStatus[x].preenchido = false;
            var quadradoAlterar = document.querySelector("#" + String(quadradoStatus[x].simbolo) + "-" + String(quadradoStatus[x].id))
            quadradoAlterar.style.display = "none";
        } else if(quadradoStatus[x].simbolo == "bola") {
            quadradoStatus[x].preenchido = false;
            var quadradoAlterar = document.querySelector("#" + String(quadradoStatus[x].simbolo) + "-" + String(quadradoStatus[x].id))
            quadradoAlterar.style.display = "none";
        }
        quadradoStatus[x].simbolo = "sim" + String(x+1);
    }
}


// Sistema de verificação de ganhador e jogar novamente

function verificarGanhador(rodadaIcone) {
    if(quadradoStatus[0].simbolo == quadradoStatus[1].simbolo && quadradoStatus[1].simbolo == quadradoStatus[2].simbolo) {
       Notificar();
    } else if(quadradoStatus[0].simbolo == quadradoStatus[3].simbolo && quadradoStatus[3].simbolo == quadradoStatus[6].simbolo) {
        Notificar();
    } else if(quadradoStatus[0].simbolo == quadradoStatus[4].simbolo && quadradoStatus[4].simbolo == quadradoStatus[8].simbolo) {
        Notificar();
    } else if(quadradoStatus[2].simbolo == quadradoStatus[5].simbolo && quadradoStatus[5].simbolo == quadradoStatus[8].simbolo) {
        Notificar();
    } else if(quadradoStatus[6].simbolo == quadradoStatus[7].simbolo && quadradoStatus[7].simbolo == quadradoStatus[8].simbolo) {
        Notificar();
    } else if(quadradoStatus[2].simbolo == quadradoStatus[4].simbolo && quadradoStatus[4].simbolo == quadradoStatus[6].simbolo) {
        Notificar();
    } else if(quadradoStatus[1].simbolo == quadradoStatus[4].simbolo && quadradoStatus[4].simbolo == quadradoStatus[7].simbolo) {
        Notificar();
    } else if(quadradoStatus[3].simbolo == quadradoStatus[4].simbolo && quadradoStatus[4].simbolo == quadradoStatus[5].simbolo) {
        Notificar();
    }
    function Notificar() {
        alert("O simbolo " + rodadaIcone + " ganhou! Resetando automaticamente.");
        jogarNovamente();
    }
}

function jogarNovamente() {
    Preenchimento(0, true);
}
