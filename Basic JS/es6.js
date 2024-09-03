// ES6

const alunos = [
    {
        nome: "Pablo",
        idade: 25,
    },
    {
        nome: "Pedro",
        idade: 19,
    },
    {
        nome: "João",
        idade: 12,
    },
    {
        nome: "Lucas",
        idade: 11,
    },

]

const alunosFiltrados = alunos.filter(alunos => alunos.idade <= 15)
console.table(alunosFiltrados)

const alunoLucas= alunos.find((aluno) => aluno.nome == 'Lucas')
console.log(alunoLucas)

const alunoLucasIndex = alunos.findIndex((aluno) => aluno.nome == 'Lucas')
console.log(alunoLucasIndex)

const idades = alunos.reduce((acc, aluno) =>{
    return acc+ aluno.idade
},0)

console.log(idades)

// some e every == bolean