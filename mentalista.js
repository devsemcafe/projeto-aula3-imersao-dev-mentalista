var numeroSecreto = parseInt(Math.random() * 10)

var tentativas = 3

while(tentativas > 0) {

var chute = parseInt(prompt("Digite um numero de 0 a 10"))

if (numeroSecreto == chute) {
 alert("Acertou")
  break
} else if (chute > numeroSecreto) {
 alert("o numero secreto e menor")
} else if (chute < numeroSecreto) {
 alert("o numero secreto e maior")
  tentativas = tentativas - 1
}
}

if (chute != numeroSecreto) {
  alert("Suas tentativas acabaram. O numero secreto era " + numeroSecreto)
} 