const quadradoStatus = [
    {
        id: 1,
        preenchido: false,
        simbolo: 'nenhum',
    }, 
    {
        id: 2,
        preenchido: false,
        simbolo: 'nenhum',
    },
    {
        id: 3,
        preenchido: false,
        simbolo: 'nenhum',
    },
    {
        id: 4,
        preenchido: false,
        simbolo: 'nenhum',
    },
    {
        id: 5,
        preenchido: false,
        simbolo: 'nenhum',
    },
    {
        id: 6,
        preenchido: false,
        simbolo: 'nenhum',
    },
    {
        id: 7,
        preenchido: false,
        simbolo: 'nenhum',
    },
    {
        id: 8,
        preenchido: false,
        simbolo: 'nenhum',
    },
    {
        id: 9,
        preenchido: false,
        simbolo: 'nenhum',
    }
]
for(let x = 0; x < 9; x++) {
    quadradoStatus[x].seletor = document.querySelector("#quadrado" + String(x+1))
    .addEventListener("click", () => {
        quadradoClick(quadradoStatus[x].id)
    })
}
function quadradoClick(quadradoId) {
    Preenchido(quadradoId);
}

// Sistema de Preenchimento

function Preenchido(quadradoId) {
    if(quadradoStatus[quadradoId-1].preenchido == true) {
        console.error("Quadrado " + quadradoId + " Já foi preenchido!")
    } else {
        Preencher(quadradoId);
    }
}

function Preencher(quadradoId) {
    
    quadradoStatus[quadradoId-1].preenchido = true;
    console.log("O quadrado " + quadradoId + " foi preenchido!")
    Rodada();
} 
// Sistema de Rodada

let rodada = 0;
let rodadaIcone;
function Rodada() {
    alterarRodada(rodada);
    rodada++;
    function alterarRodada(rodada) {
        if((rodada%2)==0) {
            rodadaIcone = "bola";
            Animação(rodadaIcone);
        } else {
            rodadaIcone = "x";
            Animação(rodadaIcone);
        }
    }
}

// Sistema de Animação da Rodada

function Animação(rodadaIcone) {
    
}