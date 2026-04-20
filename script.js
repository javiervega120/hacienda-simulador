
const inputSalario = document.querySelector("#salarioBruto");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");
const montoNeto = document.querySelector("#montoNeto");
const porcentaje = document.querySelector("#porcentaje");

btn.addEventListener("click", () => {
  const salario = parseFloat(inputSalario.value);

  if (isNaN(salario) || salario <= 0) {
    alert("Introduce un salario válido");
    return;
  }

  // Calcular retención
  let retencion = 0;

  if (salario > 30000) {
    retencion = 20;
  } else {
    retencion = 15;
  }

  const netoAnual = salario - (salario * retencion / 100);
  const netoMensual = netoAnual / 12;


  montoNeto.textContent = netoMensual.toFixed(2);
  porcentaje.textContent = retencion;

  resultado.classList.remove("hidden");


  if (netoMensual > 2000) {
    montoNeto.style.color = "green";
  } else {
    montoNeto.style.color = "red";
  }
});
