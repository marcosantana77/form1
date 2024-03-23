document.addEventListener("DOMContentLoaded", function() {
    const tablaResultados = document.getElementById("tablaResultados");
    
    // Obtener los datos del formulario del almacenamiento local
    const formData = JSON.parse(localStorage.getItem("formularioData"));

    // Crear una fila en la tabla con los datos del formulario
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${formData.id}</td>
        <td>${formData.nombre}</td>
        <td>${formData.apellidos}</td>
        <td>${formData.telefono}</td>
        <td>${formData.correo}</td>
        <td>${formData.edad}</td>
        <td>${formData.fechaNacimiento}</td>
    `;

    // Agregar la fila a la tabla
    tablaResultados.appendChild(fila);
});
document.addEventListener("DOMContentLoaded", function() {
    const borrarTablaBtn = document.getElementById("borrarTabla");
    const tablaResultados = document.getElementById("tablaResultados");
    
    borrarTablaBtn.addEventListener("click", function() {
        // Eliminar todas las filas de la tabla
        tablaResultados.innerHTML = "";
        
        // Eliminar los datos del formulario del almacenamiento local
        localStorage.removeItem("formularioData");
    });
});
