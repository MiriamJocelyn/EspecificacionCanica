using EspecificacionCanica.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EspecificacionCanica.Controllers
{
    public class EspecificacionController : Controller
    {
        // GET: Especificacion
        public ActionResult Index()
        {
            Inicializacion();
            return View();
        }

        // GET: Especificacion/Details/5
        public ActionResult Details(Canica id)
        {
            if (Session["usuario"] == null)
            {

            }

            return View(id);
        }

        // GET: Especificacion/Create
        public ActionResult Create()
        {

            return View();
        }

        // POST: Especificacion/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Especificacion/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        public ActionResult Prueba(Busqueda id)
        {
            //id.clientes

            Canica c = new Canica();
            c.Cliente = "ETs Jacques Ferry et Compagnie";
            c.Modelo = "Canica de vidrio Mezcla Magos";
            c.Medida = "20pzs(s)/16mm(+)1pza(s)/25mm";
            c.Calibracion = "NO";
            c.CodigoSAP = "CECAO163466";

            c.NombreCliente = "COLLECTION WIZARD";
            c.Empaque = "20 Redes/Display/4 Display/Caja";
            c.ColorMalla = "CMEMAL002 NEGRO";
            c.NumArticulo = "303494";

            EtiquetaBote etiquetaBote = new EtiquetaBote();
            etiquetaBote.CodSapAdherible = "CMEETQ080";
            etiquetaBote.CodSapTrasero = "CMEETQ063";
            etiquetaBote.CodBarrasTrasero = "603827436344";
            etiquetaBote.CodSapBote = "CMEVIT021";
            etiquetaBote.CodSapEsponja = "CMEESP001";
            etiquetaBote.CodSapPolipack = "CMEPOL002";
            etiquetaBote.Tapa = "LA TAPA DEL BOTE DEBE DE SER BLANCA";
            etiquetaBote.Observaciones = "";
            etiquetaBote.descImgPrincipal = "ESTE ADHERIBLE DEBERÁ ESTAR PLASTIFICADO, NO DE PAPEL.";
            etiquetaBote.descImgFrente = "STICKER PLASTIFICADO";
            etiquetaBote.descImgVuelta = "STICKER DE LÍNEA DE PAPEL";
            c.etiquetaBote = etiquetaBote;
            return PartialView("Details", c);
        }
        // POST: Especificacion/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
        [HttpPost]
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Especificacion/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Especificacion/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        #region Funciones

        protected void Inicializacion()
        {
            List<SelectListItem> busquedaCliente = new List<SelectListItem>();
            busquedaCliente.Add(new SelectListItem()
            {
                Text = "Seleccionar Cliente",
                Value = "0"
            });

            busquedaCliente.Add(new SelectListItem()
            {
                Text = "Miriam Joce",
                Value = "0"
            });
            busquedaCliente.Add(new SelectListItem()
            {
                Text = "Ricardo Rui",
                Value = "0"
            });


            ViewBag.Clientes = busquedaCliente;

            List<SelectListItem> busquedaArticulos = new List<SelectListItem>();
            busquedaArticulos.Add(new SelectListItem()
            {
                Text = "Seleccionar Código",
                Value = "0"
            });

            ViewBag.Articulos = busquedaArticulos;
        }

        protected void llenarClientes()
        {


        }

        #endregion
    }
}
