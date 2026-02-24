# Ejercicio de Programación

La prueba está compuesta por dos proyectos independientes dentro de la misma solución.

---

## Parte 1 – C# (Proyecto: PruebaDesarrollo)

1. Clona el repositorio y abre la solución `PruebaDesarrollo.sln` en Visual Studio.
2. Revisa el archivo `Program.cs` para entender el flujo de la aplicación.
3. Abre `CalculadoraFacturacion.cs` y completa el método `CalcularTotales`.
   - El método recibe un arreglo de líneas con el formato: `RUC;MontoFacturado;Impuesto`
   - Debe retornar un diccionario donde la clave es el RUC y el valor es una tupla con el total facturado y el total de impuestos acumulados para ese RUC.
4. Ejecuta la aplicación y verifica que los resultados sean correctos usando el archivo `input.txt`.

---

## Parte 2 – HTML, CSS y JavaScript (Proyecto: PruebaDesarrolloWeb)

1. Establece `PruebaDesarrolloWeb` como proyecto de inicio en Visual Studio.
2. Ejecuta la aplicación y navega a la sección **Desafío Web** en el menú.
3. El desafío consiste en completar el **Gestor de Inventario de Productos**. Debes resolver los siguientes puntos:

### HTML (`Views/Productos/Index.cshtml`)
- **TODO 1**: Corregir el atributo `type` del input de Precio.
- **TODO 2**: Agregar el `<input>` faltante para el campo Cantidad.
- **TODO 3**: Agregar el atributo `id="estado"` al `<select>`.
- **TODO 4**: Agregar las columnas faltantes (`<th>`) en el encabezado de la tabla.

### CSS (`wwwroot/css/productos.css`)
- **TODO 1**: Aplicar efecto hover a las filas de la tabla.
- **TODO 2**: Estilizar la clase `.estado-en-stock` (color verde, negrita).
- **TODO 3**: Estilizar la clase `.estado-agotado` (color rojo, negrita).
- **TODO 4**: Estilizar el bloque `.total-inventario` (fondo, padding, borde).

### JavaScript (`wwwroot/js/productos.js`)
- **TODO 1**: Completar `agregarProducto()` — leer el formulario, validar campos y agregar una fila a la tabla.
- **TODO 2**: Completar `eliminarProducto(boton)` — eliminar la fila correspondiente de la tabla.
- **TODO 3**: Completar `filtrarProductos()` — filtrar filas por nombre en tiempo real.
- **TODO 4**: Completar `calcularTotal()` — calcular y mostrar el valor total del inventario.
