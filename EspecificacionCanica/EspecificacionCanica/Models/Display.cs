using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EspecificacionCanica.Models
{
    public class Display
    {
        [DisplayName("Código SAP:")]
        public string codSAP { get; set; }
        [DisplayName("Código SAP Sticker:")]
        public string  codSAPSticker{ get; set; }
        [DisplayName("Código SAP:")]
        public string codBarras { get; set; }
        public string descripcion { get; set; }
        public string imgPrincipal { get; set; }

    }
}