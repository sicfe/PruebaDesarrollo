using Microsoft.AspNetCore.Mvc;

namespace PruebaDesarrolloWeb.Controllers
{
    public class ProductosController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
