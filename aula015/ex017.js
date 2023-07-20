let num = [5,8,2,9,3]

num.push(1) // colocar o 1 no final do vetor
num.sort() // para ordenar o vetor
pos = num.indexOf(8)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

if(pos == -1){
    console.log("O valor informado não foi encontrado!")
} else {
    console.log(`O valor está na posição ${pos}`)
}