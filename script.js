const perguntas = [
    {
        pergunta: "Qual é a função principal do JavaScript?",
        respostas: [
            "Manipular o DOM",
            "Estilizar páginas web",
            "Gerenciar bancos de dados",
            "Criar layouts responsivos",
            "Todas as anteriores"
        ],
        correta: 0
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "const",
            "let",
            "var",
            "variable",
            "declare"
        ],
        correta: 2
    },
    {
        pergunta: "Qual operador é usado para atribuição em JavaScript?",
        respostas: [
            "=",
            "==",
            ":=",
            "+=",
            "==="
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para imprimir uma mensagem no console em JavaScript?",
        respostas: [
            "console.print()",
            "log.console()",
            "print()",
            "console.log()",
            "log()"
        ],
        correta: 3
    },
    {
        pergunta: "Qual estrutura de controle é usada para executar um bloco de código se uma condição for verdadeira em JavaScript?",
        respostas: [
            "if-else",
            "for",
            "while",
            "switch",
            "do-while"
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "stringToInt()",
            "toInteger()",
            "convertToInt()",
            "parseString()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "addToEnd()",
            "append()",
            "insert()",
            "addLast()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual símbolo é usado para comentários de linha única em JavaScript?",
        respostas: [
            "//",
            "/* */",
            "<!-- -->",
            "**",
            "##"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "removeLast()",
            "delete()",
            "splice()",
            "remove()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual operador é usado para comparar valores e tipos em JavaScript?",
        respostas: [
            "==",
            "===",
            "=",
            "!=",
            "!=="
        ],
        correta: 1
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta

        corretas.delete(item)
        if (estaCorreta) {
        corretas.add(item)
        }

        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
    }


    quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}