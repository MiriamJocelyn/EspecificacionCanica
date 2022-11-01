using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EspecificacionCanica.Models
{
    public class EspecificacionCanica
    {
        //public string Titulo { get; set; } = "ESPECIFICACIÓN DE PRODUCTO";
        [DisplayName("Cliente:")]
        public string  Cliente { get; set; }
        [DisplayName("Modelo/Línea:")]
        public string  Modelo { get; set; }
        [DisplayName("Medida:")]
        public string Medida { get; set; }
        [DisplayName("Calibración:")]
        public string Calibracion { get; set; }
        [DisplayName("Código SAP:")]
        public string CodigoSAP { get; set; }
        [DisplayName("Nombre para el cliente:")]
        public string NombreCliente { get; set; }
        [DisplayName("Empaque:")]
        public string Empaque { get; set; }
        [DisplayName("Color malla:")]
        public string ColorMalla { get; set; }
        [DisplayName("Num de artículo cliente:")]
        public string NumArticulo { get; set; }

        public EtiquetaCanica  etiquetaCanica { get; set; }
        public EtiquetaBote  etiquetaBote { get; set; }
        public EtiquetaCaballete etiquetaCaballete { get; set; }
        public Display  display { get; set; }
        public Caja caja { get; set; }
        public Bolsa bolsa { get; set; }
    }
}