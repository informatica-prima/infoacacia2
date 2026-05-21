console.log("ejecutó código");
function probar() {
  console.log("Probando");
}
function ajustarFondoSVG_NO() {
  const seccion = document.querySelector("#Seccion01");
  const svg = document.querySelector("#svgFondo01");

  const adaptarSVG = new ResizeObserver((entries) => {
    for (let entry of entries) {
      // 1. Obtener las dimensiones actuales de la sección
      const anchoActual = entry.contentRect.width;
      const altoActual = entry.contentRect.height;

      // 2. Ajustar el alto físico del SVG
      svg.setAttribute("height", altoActual);

      // 3. Ajustar el viewBox: mantenemos el ancho base y actualizamos el alto
      // El '0 0' indica el origen, 'anchoActual' el ancho y 'altoActual' el nuevo alto
      svg.setAttribute("viewBox", `0 0 ${anchoActual} ${altoActual}`);
    }
  });
}

// Ejecutar al cargar y cuando cambie el tamaño de la ventana
window.addEventListener("load", ajustarFondoSVG);
window.addEventListener("resize", ajustarFondoSVG);
