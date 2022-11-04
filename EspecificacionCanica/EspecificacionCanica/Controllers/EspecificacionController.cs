using EspecificacionCanica.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace EspecificacionCanica.Controllers
{
    public class EspecificacionController : Controller
    {
        // GET: Especificacion

        public ActionResult Index(string id)
        {
            if (id == null)
                return RedirectToAction("Seguridad");
            else
            {
                String[] url = id.Split(' ');
                if (url.Length > 0)
                {
                    if (Session["token"] != null)
                    {
                        if (url[url.Length - 1] == Session["token"].ToString())
                        {
                            Session["usuario"] = url[0] + " " + url[1];
                            ViewData["Usuario"] = Session["usuario"].ToString().ToUpper() ;
                        }
                        else
                            return RedirectToAction("Seguridad");
                    }
                    else
                        return RedirectToAction("Login","Account",new { });

                }
                else
                    return RedirectToAction("Seguridad");

            }
            Inicializacion();
            return View();
        }
        public ActionResult Seguridad()
        {
            return View();
        }
        public ActionResult PaginaNoEncontrada()
        {
            return View();
        }
        // GET: Especificacion/Details/5
        public ActionResult Details(Models.EspecificacionCanica id)
        {
            if (Session["usuario"] == null)
            {
                return RedirectToAction("Seguridad");
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
        [HttpPost]
        public ActionResult clientes(string id)
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

            return Json(new { list = busquedaCliente, error = "" });
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

            ViewBag.Clientes = busquedaCliente;

            List<SelectListItem> busquedaArticulos = new List<SelectListItem>();
            busquedaArticulos.Add(new SelectListItem()
            {
                Text = "Seleccionar Código",
                Value = "0"
            });

            ViewBag.Articulos = busquedaArticulos;
        }


        #endregion
    }
}
