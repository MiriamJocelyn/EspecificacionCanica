using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EspecificacionCanica.Models
{
    public class EtiquetaCaballete
    {
        [DisplayName("Código de Barras (Etiqueta):")]
        public string CodBarras { get; set; }
        [DisplayName("Código SAP Etiqueta:")]
        public string CodSAPEtiqueta { get; set; }
        public string descripcion { get; set; }
        public List<CanicaCaballete> canicas { get; set; }
    }

    public class CanicaCaballete
    {
        public string nombre { get; set; }
    }
}