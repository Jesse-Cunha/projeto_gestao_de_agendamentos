import { classe_funcionario } from "./classe-funcionario.js"

const funcionario_1  = new classe_funcionario("Funcionário 1")
const funcionario_2  = new classe_funcionario("Funcionário 2")
const funcionario_3  = new classe_funcionario("Funcionário 3")
const funcionario_4  = new classe_funcionario("Funcionário 4")

export const lista_funcionarios = new Array()

lista_funcionarios.push(funcionario_1, funcionario_2, funcionario_3, funcionario_4)

localStorage.setItem("lista de funcionários", JSON.stringify(lista_funcionarios))

// const data = "10/11/2024"
// const data_2 = "11/11/2024"

// const id = Date.parse(data)
// const id_2 = Date.parse(data_2)

// console.log(id)
// console.log(id_2)