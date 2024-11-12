function simularCredito() {
    let monto = parseFloat(document.getElementById("monto").value);
    let interes = parseFloat(document.getElementById("interes").value);
    let plazo = parseInt(document.getElementById("plazo").value);
  

    if (!monto || monto <= 0) {
      alert("Por favor, introduce un monto válido.");
      console.log("Alerta: Monto no válido");
      return;
    }
    if (!interes || interes <= 0) {
      alert("Por favor, introduce una tasa de interés válida.");
      console.log("Alerta: Interés no válido");
      return;
    }
    if (!plazo || plazo <= 0) {
      alert("Por favor, introduce un plazo válido.");
      console.log("Alerta: Plazo no válido");
      return;
    }
  
    // calculo del pago mensual utilizando un ciclo
    let tasaMensual = interes / 12 / 100;
    let numeroPagos = plazo * 12;
    let pagoMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -numeroPagos));
  
    // log the calculation process
    console.log(`Tasa Mensual: ${tasaMensual}, Número de Pagos: ${numeroPagos}, Pago Mensual: ${pagoMensual}`);
  
    // mostrar el resultado
    document.getElementById("resultado").innerText = `El pago mensual es: $${pagoMensual.toFixed(2)}`;
    console.log(`El pago mensual es: $${pagoMensual.toFixed(2)}`);
  }
  
  document.getElementById("simuladorForm").addEventListener("submit", function(event) {
    event.preventDefault();
    simularCredito();
    console.log("Evento de formulario procesado");
  });
  