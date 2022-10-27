using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EspecificacionCanica.Models
{
    public class Canica
    {
        [DisplayName("Nombre producción")]
        public string nomProduccion { get; set; }
        [DisplayName("Nombre cliente")]
        public string nomCliente { get; set; }
        [DisplayName("Código SAP etiqueta")]
        public string codSAPEtiqueta { get; set; }
        public string imgCanica { get; set; }
    }
}