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
            return View();
        }

        // GET: Especificacion/Details/5
        public ActionResult Details(int id)
        {
            Canica c = new Canica();
            c.Cliente = "ETs Jacques Ferry et Compagnie";
            c.Modelo = "Canica de vidrio Mezcla Magos";
            return View();
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
    }
}
