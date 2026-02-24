// ===================================================
// DESAFIO JAVASCRIPT - Gestión de Inventario de Productos
// ===================================================

// TODO 1: Completar la función agregarProducto
// Esta función debe:
//  - Leer los valores de los inputs: nombre, precio, cantidad, estado
//  - Validar que ningún campo esté vacío; mostrar alert("Todos los campos son obligatorios.") si falta alguno
//  - Crear una nueva fila <tr> y agregarla al <tbody id="cuerpo-tabla">
//  - La fila debe tener 5 celdas: Nombre | Precio | Cantidad | Estado | Acciones
//  - La celda Estado debe aplicar la clase CSS "estado-en-stock" o "estado-agotado" según el valor
//  - La celda Acciones debe contener un botón "Eliminar" que llame a eliminarProducto(this)
//  - Limpiar los campos del formulario después de agregar
//  - Llamar a calcularTotal() al finalizar
function agregarProducto() {
    // Escribe tu código aquí
}

// TODO 2: Completar la función eliminarProducto
// Esta función debe:
//  - Recibir el botón presionado como parámetro (boton)
//  - Encontrar la fila <tr> que contiene ese botón
//  - Eliminar esa fila de la tabla
//  - Llamar a calcularTotal() al finalizar
function eliminarProducto(boton) {
    // Escribe tu código aquí
}

// TODO 3: Completar la función filtrarProductos
// Esta función debe:
//  - Leer el texto del input con id="filtro" (convertirlo a minúsculas)
//  - Recorrer todas las filas del <tbody id="cuerpo-tabla">
//  - Mostrar las filas cuyo nombre de producto (1ª columna) contenga el texto buscado
//  - Ocultar las que no coincidan
//  Pista: row.style.display = ""  para mostrar
//         row.style.display = "none"  para ocultar
function filtrarProductos() {
    // Escribe tu código aquí
}

// TODO 4: Completar la función calcularTotal
// Esta función debe:
//  - Recorrer todas las filas visibles del <tbody id="cuerpo-tabla">
//  - Obtener Precio (columna índice 1) y Cantidad (columna índice 2) de cada fila
//  - Calcular precio * cantidad por fila y acumular la suma total
//  - Mostrar el resultado en el elemento con id="total-valor"
//  - Formato: "$ X.XX"  (dos decimales)
//  Pista: usa parseFloat() y toFixed(2)
function calcularTotal() {
    // Escribe tu código aquí
}
