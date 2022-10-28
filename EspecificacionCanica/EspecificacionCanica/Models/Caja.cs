using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EspecificacionCanica.Models
{
    public class Caja
    {
        [DisplayName("Código SAP (Caja Master):")]
        public string CodSap { get; set; }
        public string DesCodSap { get; set; }
        [DisplayName("Código de Barras (Caja Master):")]
        public string CodBarras { get; set; }
        public string DesCodBarras { get; set; }
        public string imgPrincipal { get; set; }
        public string imgCodBarras { get; set; }
    }
}