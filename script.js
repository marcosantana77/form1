document.addEventListener("DOMContentLoaded", function() {
  const formulario = document.getElementById("formulario");
  const mensajeError = document.getElementById("mensajeError");

  formulario.addEventListener("submit", function(event) {
      event.preventDefault();

      const id = formulario.id.value;
      const nombre = formulario.nombre.value;
      const apellidos = formulario.apellidos.value;
      const telefono = formulario.telefono.value;
      const correo = formulario.correo.value;
      const edad = formulario.edad.value;
      const fechaNacimiento = formulario.fechaNacimiento.value;

      let errores = [];

      // Validación de campos obligatorios
      if (!id || !nombre || !apellidos || !telefono || !correo || !edad || !fechaNacimiento) {
          errores.push("Todos los campos son obligatorios.");
      }

      if (!/^\d{5}$/.test(id)) {
          errores.push("El ID debe tener 5 dígitos exactos.");
          mostrarError(formulario.id, "El ID debe tener 5 dígitos exactos.");
      } else {
          ocultarError(formulario.id);
      }

      if (!nombre.trim()) {
          errores.push("El nombre no puede estar vacío.");
          mostrarError(formulario.nombre, "El nombre no puede estar vacío.");
      } else {
          ocultarError(formulario.nombre);
      }

      if (!apellidos.trim()) {
          errores.push("Los apellidos no pueden estar vacíos.");
          mostrarError(formulario.apellidos, "Los apellidos no pueden estar vacíos.");
      } else {
          ocultarError(formulario.apellidos);
      }

      if (!/^\(\d{3}\)\d{3}-\d{4}$/.test(telefono)) {
          errores.push("El teléfono debe tener el formato (###)###-####.");
          mostrarError(formulario.telefono, "El teléfono debe tener el formato (###)###-####.");
      } else {
          ocultarError(formulario.telefono);
      }

      if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(correo)) {
          errores.push("El correo electrónico no es válido.");
          mostrarError(formulario.correo, "El correo electrónico no es válido.");
      } else {
          ocultarError(formulario.correo);
      }

      const edadNum = parseInt(edad);
      if (isNaN(edadNum) || edadNum <= 0) {
          errores.push("La edad debe ser un número positivo.");
          mostrarError(formulario.edad, "La edad debe ser un número positivo.");
      } else {
          ocultarError(formulario.edad);
      }

      if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
          errores.push("La fecha de nacimiento debe tener el formato AAAA-MM-DD.");
          mostrarError(formulario.fechaNacimiento, "La fecha de nacimiento debe tener el formato AAAA-MM-DD.");
      } else {
          ocultarError(formulario.fechaNacimiento);
      }

      if (errores.length > 0) {
          mensajeError.textContent = errores.join("\n");
          mensajeError.style.color = "red";
      } else {
          // Crear un objeto con los datos del formulario
          const datosFormulario = {
              id,
              nombre,
              apellidos,
              telefono,
              correo,
              edad,
              fechaNacimiento
          };

          try {
              // Guardar los datos del formulario en el almacenamiento local
              localStorage.setItem("formularioData", JSON.stringify(datosFormulario));

              // Redireccionar a la página de resultados
              window.location.href = "resultados.html";
          } catch (error) {
              mensajeError.textContent = "Error al guardar los datos en el almacenamiento local.";
              mensajeError.style.color = "red";
          }
      }
  });

  function mostrarError(elemento, mensaje) {
      const errorContainer = elemento.parentElement.querySelector(".error-message");
      if (!errorContainer) {
          const newErrorContainer = document.createElement("p");
          newErrorContainer.className = "error-message";
          newErrorContainer.textContent = mensaje;
          newErrorContainer.style.color = "red";
          elemento.parentElement.appendChild(newErrorContainer);
      } else {
          errorContainer.textContent = mensaje;
          errorContainer.style.display = "block";
      }
  }

  function ocultarError(elemento) {
      const errorContainer = elemento.parentElement.querySelector(".error-message");
      if (errorContainer) {
          errorContainer.textContent = "";
          errorContainer.style.display = "none";
      }
  }
});
