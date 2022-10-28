using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EspecificacionCanica.Models
{
    public class Bolsa
    {
           
        [DisplayName("Código SAP (Super saco):")]
        public string CodSap { get; set; }
        [DisplayName("Medidas:")]
        public string Medidas { get; set; }
        [DisplayName("Código de Barras (Bolsa):")]
        public string CodBarra { get; set; }
    }
}