function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }

  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(x, z) {
    if (z === 0) throw new Error("División por cero");
    return x / z;
  }