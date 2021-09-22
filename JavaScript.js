var notaDoPrimeiroBimestre = 5;
var notaDoSegundoBimestre = 5;
var notaDoTerceiroBimestre = 5;
var notaDoQuartoBimestre = 5;

var notaFinal =
  (notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre) /
  4;
var media = notaFinal.toFixed(2);

console.log("A nota final é: " + media);
