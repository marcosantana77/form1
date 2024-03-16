document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");
  const mensajeError = document.getElementById("mensajeError");

  [
    "id",
    "nombre",
    "apellidos",
    "telefono",
    "correo",
    "edad",
    "fechaNacimiento",
  ].forEach((campo) => {
    const input = document.getElementById(campo);
    input.addEventListener("input", validarCampo);
    input.addEventListener("blur", validarCampo);
  });

  function validarCampo(event) {
    const input = event.target;
    const nombreCampo = input.name;
    const valorCampo = input.value;

    if (event.type === "blur" || valorCampo !== "") {
      if (nombreCampo === "id" && !/^\d{5}$/.test(valorCampo)) {
        mensajeError.textContent = "El ID debe tener 5 dígitos exactos.";
      } else if (
        ["nombre", "apellidos"].includes(nombreCampo) &&
        valorCampo.trim() === ""
      ) {
        mensajeError.textContent =
          "El nombre y los apellidos no pueden estar vacíos.";
      } else if (
        nombreCampo === "telefono" &&
        !/^\d{3}\d{3}-\d{4}$/.test(valorCampo)
      ) {
        mensajeError.textContent =
          "El teléfono debe tener el formato (###)###-####.";
      } else if (
        nombreCampo === "correo" &&
        !/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(valorCampo)
      ) {
        mensajeError.textContent = "El correo electrónico no es válido.";
      } else if (nombreCampo === "edad") {
        const edadNum = parseInt(valorCampo);
        if (isNaN(edadNum) || edadNum <= 0) {
          mensajeError.textContent = "La edad debe ser un número positivo.";
        }
      } else if (
        nombreCampo === "fechaNacimiento" &&
        !/^\d{4}-\d{2}-\d{2}$/.test(valorCampo)
      ) {
        mensajeError.textContent =
          "La fecha de nacimiento debe tener el formato AAAA-MM-DD.";
      } else {
        if (
          input.nextElementSibling &&
          input.nextElementSibling.matches("#mensajeError")
        ) {
          mensajeError.textContent = "";
        }
      }
    }
  }
});
