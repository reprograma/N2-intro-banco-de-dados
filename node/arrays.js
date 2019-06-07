const comidas = [
  'Batata frita',
  'Hamburguer',
  'Sorvete de chocolate',
  'Saladinha delicia'
]

// Exercício: Selecione apenas a batatinha
// Jeito simples de fazer o filter:
const batatinha = comidas.filter(comida => comida === 'Batata frita')
console.log(batatinha)

// Jeito mais complicado de fazer o filter:
const batatinhaComplicada = comidas.filter(comida => {
  if(comida === 'Batata frita') return true
  else return false
})


const comida = 'teste'
console.log(comida === 'Batata frita')


// Exercício: transforme a lista de comidas em comidas divertidas (adicione uma carinha feliz nelas)
const comidasFelizesEComplexas = comidas.map(comida => {
  return comida + ' :D xD o/'
})

const comidasFelizes = comidas.map(comida => comida + ' :D xD o/')
console.log(comidasFelizes)


const comidas2 = [
  { nome: 'Batata frita', vegano: true },
  { nome: 'Hamburguer', vegano: false },
  { nome: 'Sorvete de chocolate', vegano: false },
  { nome: 'Saladinha delicia', vegano: true }
]

// Exercício: Selecione apenas as comidinhas veganas.
const comidasVeganasEComplexas = comidas2.filter(comida => {
  return comida.vegano === true
})

const comidasVeganas = comidas2.filter(comida => comida.vegano === true)
console.log(comidasVeganas)


const comidas3 = [
  { nome: 'Batata frita', vegano: true, valor: 5.00 },
  { nome: 'Hamburguer', vegano: false, valor: 18.00 },
  { nome: 'Sorvete de chocolate', vegano: false, valor: 7.00 },
  { nome: 'Saladinha delicia', vegano: true, valor: 12.00 }
]

// Exercício: Qual o custo total dessa refeição maneira?! 

let custoDaRefeicao = 0
comidas3.forEach(comida => {
  custoDaRefeicao = custoDaRefeicao + comida.valor
})

const custoDaRefeicaoComplexa = comidas3.reduce(
  (acumulador, comida) => {
    return acumulador + comida.valor
  } , 0)

console.log(custoDaRefeicaoComplexa)

const sorteiaNumero = Math.floor(Math.random() * 36)

console.log('*** sorteiaNumero:', sorteiaNumero)