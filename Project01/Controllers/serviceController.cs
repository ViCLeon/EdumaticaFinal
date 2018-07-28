using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Project01.Controllers
{
    public class serviceController : Controller
    {
        // GET: service
        public string Index(int? departmentId)
        {
            proveedorS.WebService1 proveedorX = new proveedorS.WebService1();

            //int rest = proveedorX.getSuma(5, 15);

            var rest = proveedorX.getEmpleadosDepartamento(departmentId);

            return rest;
        }

        // GET: service
        public ActionResult ListaEmpleados()
        {
            return View();
        }

        // GET: service
        public ActionResult getGraphics()
        {
            return View();
        }

        public string getGraphicsData()
        {
            proveedorS.WebService1 proveedorX = new proveedorS.WebService1();

            return proveedorX.returnDataGraphics();
        }

        public ActionResult DownloadViewPDF()
        {
            return new Rotativa.MVC.ActionAsPdf("/getGraphics") { FileName = "Reporte.pdf" };
        }
    }
}