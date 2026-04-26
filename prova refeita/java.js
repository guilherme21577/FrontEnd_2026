// Dados da Página 2 — Grupos D, E, F
const pagina2 = [
    {
        id: "grupoD",
        emoji: "🅳",
        nome: "Grupo D",
        selecoes: ["Estados Unidos", "Paraguai", "Austrália", "Turquia"],
        fatos: [
            "Os EUA jogam em casa, vantagem histórica em Copas.",
            "Austrália enfrenta frequentemente seleções sul-americanas em torneios."
        ]
    },
    {
        id: "grupoE",
        emoji: "🅴",
        nome: "Grupo E",
        selecoes: ["Alemanha", "Equador", "Costa do Marfim", "Curaçao"],
        fatos: [
            "Alemanha costuma dominar fases de grupos.",
            "Equador e Costa do Marfim têm estilos físicos semelhantes."
        ]
    },
    {
        id: "grupoF",
        emoji: "🅵",
        nome: "Grupo F",
        selecoes: ["Holanda", "Japão", "Tunísia", "Suécia"],
        fatos: [
            "Holanda possui um dos maiores históricos em fases de grupos.",
            "Japão surpreende frequentemente seleções favoritas em Copas."
        ]
    }
];


const pagina1 = [
    {
        id: "grupoA",
        emoji: "🅰️",
        nome: "Grupo A",
        selecoes: ["México", "África do Sul", "Coreia do Sul", "República Tcheca"],
        fatos: [
            "O jogo de abertura será México x África do Sul.",
            "Confrontos entre Coreia do Sul e seleções europeias já ocorreram em várias Copas, com histórico equilibrado."
        ]
    },
    {
        id: "grupoB",
        emoji: "🅱️",
        nome: "Grupo B",
        selecoes: ["Canadá", "Suíça", "Catar", "Vaga Europeia (Bósnia)"],
        fatos: [
            "O Canadá joga em casa, fator importante de desempenho.",
            "Catar e Suíça já se enfrentaram recentemente em amistosos internacionais."
        ]
    },
    {
        id: "grupoC",
        emoji: "🅲",
        nome: "Grupo C",
        selecoes: ["Brasil", "Marrocos", "Haiti", "Escócia"],
        fatos: [
            "Brasil, Marrocos e Escócia já dividiram grupo em 1998.",
            "O Brasil nunca perdeu para a Escócia em Copas."
        ]
    }
];

const paginas = [pagina1, pagina2];
let paginaAtual = 0;

function renderizarGrupos(grupos) {

    document.querySelectorAll(".grupo").forEach(el => el.remove());

    const btnWrap = document.querySelector(".btn-wrap");

    grupos.forEach(grupo => {
        const div = document.createElement("div");
        div.id = grupo.id;
        div.className = "grupo";


        const itens = grupo.selecoes.map(s => `<li>${s}</li>`).join("");


        const fatos = grupo.fatos.map(f => `<p>${f}</p>`).join("");

        div.innerHTML = `
            <h2>${grupo.emoji} ${grupo.nome}</h2>
            <h3>Seleções</h3>
            <ul>${itens}</ul>
            <details>
                <summary>Saiba mais</summary>
                ${fatos}
            </details>
        `;

   
        document.body.insertBefore(div, btnWrap);
    });
}

function proximoGrupo() {
    paginaAtual = (paginaAtual + 1) % paginas.length;
    renderizarGrupos(paginas[paginaAtual]);
}