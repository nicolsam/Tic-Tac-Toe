var quadradoStatus = [
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
function Preenchido(quadradoId) {
    if(quadradoStatus[quadradoId].preenchido == true) {
        console.error("Quadrado " + quadradoId + " Já foi preenchido!")
    } else {
        propriedadePreencher(quadradoId);
    }
}
function propriedadePreencher(quadradoId) {
    quadradoStatus[quadradoId].preenchido = true;
    console.log("O quadrado " + quadradoId + " foi preenchido!")
} 
// function Rodada() {
//     if((rodada%2)==0) {
//         console.log("bola");
//     } else {
//         console.log("x");
//     }
// }
