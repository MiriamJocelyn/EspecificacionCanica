using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EspecificacionCanica.Models
{
    public class EtiquetaBote
    {
        public string Titulo { get; set; } = "ETIQUETA";
        [DisplayName("Código SAP Adherible Frente:")]
        public string CodSapAdherible  { get; set; }
        [DisplayName("Código SAP Sticker Trasero:")]
        public string CodSapTrasero { get; set; }
        [DisplayName("Código de Barras Sticker Trasero:")]
        public string CodBarrasTrasero { get; set; }
        [DisplayName("Código SAP Bote:")]
        public string CodSapBote { get; set; }
        [DisplayName("Código SAP Esponja:")]
        public string CodSapEsponja { get; set; }
        [DisplayName("Código SAP Polipack:")]
        public string CodSapPolipack { get; set; }
        //[DisplayName("Observaciones:")]
        public string Observaciones { get; set; }
        public string imgPrincipal { get; set; }
        public string imgFrente { get; set; }
        public string descImgFrente { get; set; }
        public int imgVuelta { get; set; }
        public string descImgVuelta { get; set; }
    }
}