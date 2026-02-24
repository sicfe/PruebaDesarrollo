using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PruebaDesarrollo
{
    public class CalculadoraFacturacion
    {
        // Completa este método para calcular el monto total facturado y el monto total de impuestos para cada RUC.
        // Cada linea tiene el siguiente formato: RUC, MontoFacturado, Impuesto
        public Dictionary<string, (decimal MontoFacturado, decimal Impuesto)> CalcularTotales(string[] lineas)
        {
            Dictionary<string, (decimal MontoFacturado, decimal Impuesto)> totales = new Dictionary<string, (decimal MontoFacturado, decimal Impuesto)>();

            //Escribe tu código aqui

            return totales;
        }
    }
}
