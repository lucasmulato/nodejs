// Mais de um valor

const x = 10
const y = 'Pedro'
const z = [1,2]

console.log(x,y,z )

// contagem de impressões
console.log("------------------------------")
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

// Variavel entre string
console.log("------------------------------")
console.log("O nome dele é %s, e ele é programador", y)

// limpar o console

setTimeout(() => {
    console.clear()
}, 2000);