//pegar os valores do formulario  

let nome = document.querySelector("#nome")
console.log(nome)

const campoQtde = document.querySelector("#qtde")
const resultado = document.querySelector("output")
const campoTipo = document.querySelector("#tipo")
const campoLayoutSim = document.querySelector("#layout_sim")
const campoLayoutNao = document.querySelector("#layout_nao")
const campoJs = document.querySelector("#js")
const campoPrazo = document.querySelector("#prazo")

campoPrazo.addEventListener("input", function() {
  const labelPrazo = document.querySelector("label[for='prazo']")
labelPrazo.innerHTML = `Prazo: ${campoPrazo.value} dia(s)`
calcular()
})

campoQtde.addEventListener("change", calcular)
campoTipo.addEventListener("change", calcular)
campoLayoutSim.addEventListener("change", calcular)
campoLayoutNao.addEventListener("change", calcular)
campoJs.addEventListener("change", calcular)

//calcular o preço
function calcular() {
  //R$100 por página
  let qtde = campoQtde.value
  let valor = qtde * 100

  if(campoTipo.value == 1) valor  += 100
  if(campoTipo.value == 2) valor  += 110
  if(campoTipo.value == 3) valor  += 130
  if(campoTipo.value == 4) valor  += 90
  if(campoTipo.value == 5) valor  += 220
  if(campoTipo.value == 6) valor  += 145

  if(campoLayoutSim.checked) valor += qtde * 50

  if(campoJs.checked) valor *= 1.1

  let taxaDeUrgencia = 1 - campoPrazo.value * 0.05
  valor *= 1 + taxaDeUrgencia
  
  resultado.innerText = `R$ ${valor}`
}
document.addEventListener('DOMContentLoaded', function () {
  const cupomInput = document.getElementById('cupom-input');
  const cupomSubmit = document.getElementById('cupom-submit');
  const cupomMessage = document.getElementById('cupom-message');

  cupomSubmit.addEventListener('click', function () {
    const cupomCode = cupomInput.value;

  
    if (cupomCode === 'SUPLEDEVSOFC') {
      cupomMessage.textContent = 'Cupom aplicado com sucesso! Desconto de 10% aplicado.';
    } else {
      cupomMessage.textContent = 'Cupom inválido. Por favor, insira um cupom válido.';
    }

    cupomInput.value = '';
  });
});

//mostrar o preço

