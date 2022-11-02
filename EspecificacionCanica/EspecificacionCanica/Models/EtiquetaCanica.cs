using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EspecificacionCanica.Models
{
    public class EtiquetaCanica 
    {
        [DisplayName("Código de Barras Etiquetas:")]
        public string CodBarras { get; set; }
        public List<Canica> canicas { get; set; }

        public string  imgCodBarra { get; set; }
        public string imgFrente { get; set; }
        public string imgVuelta { get; set; }

    }
}