using PruebaDesarrollo;

class Program
{
    static void Main(string[] args)
    {
        string filePath = "input.txt";
        if (File.Exists(filePath))
        {
            string[] lineas = File.ReadAllLines(filePath);
            var calculadora = new CalculadoraFacturacion();
            var totales = calculadora.CalcularTotales(lineas);

            Console.WriteLine("Montos Totales Facturados y de Impuestos:");
            foreach (var total in totales)
            {
                Console.WriteLine($"{total.Key}: Total Facturado = {total.Value.MontoFacturado}, Total Impuesto = {total.Value.Impuesto}");
            }
        }
        else
        {
            Console.WriteLine("El archivo de entrada no existe.");
        }
    }
}
