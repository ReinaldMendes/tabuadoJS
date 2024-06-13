let numeros;
let resultado = 0;

console.log("Digite um numero que deseja ver a tabuada:  ");
process.stdin.on("data", function (data) {
  numeros = Number(data, toString().trim());

  for (let i = 1; i <= 10; i++) {
    resultado = numeros * i;

    console.log(i + "x" + numeros + " = " + resultado);
  }
  process.exit();
});
