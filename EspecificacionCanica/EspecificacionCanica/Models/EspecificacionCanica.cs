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
        [DisplayName("Cliente")]
        public string  Cliente { get; set; }
        [DisplayName("Línea o Modelo")]
        public string  Modelo { get; set; }
        [DisplayName("Peso o Cantidad/ Medida")]
        public string Medida { get; set; }
        [DisplayName("Calibración")]
        public string Calibracion { get; set; }
        [DisplayName("Código SAP")]
        public string CodigoSAP { get; set; }
        [DisplayName("Nombre para el Cliente")]
        public string NombreCliente { get; set; }
        [DisplayName("Empaque")]
        public string Empaque { get; set; }
        [DisplayName("Color malla:")]
        public string ColorMalla { get; set; }
        [DisplayName("N° de Artículo del Cliente")]
        public string NumArticulo { get; set; }
        //Empaque Inicial
        [DisplayName("Descripción")]
        public string Descripcion { get; set; }
        [DisplayName("Cantidad")]
        public string Cantidad { get; set; }
        [DisplayName("Instrucciones de Empaque")]
        public string InstruccionesEmpaque { get; set; }
        [DisplayName("Códigos de Barras")]
        public string CodBarras { get; set; }
        [DisplayName("Productos (Varios Modelos)")]
        public string ProdVariosM { get; set; }
        [DisplayName("Imágenes")]
        public string Imagenes { get; set; }
        [DisplayName("Código Interno del Producto")]
        public string CodInternoPro { get; set; }
        [DisplayName("Nombre Producción")]
        public string NomProduccion { get; set; }
        [DisplayName("Nombre Cliente")]
        public string NomCliente { get; set; }
        [DisplayName("Medida")]
        public string MedidaEmp { get; set; }
        [DisplayName("Información Adicional")]
        public string InfAdicional { get; set; }
        [DisplayName("Descripción Cliente")]
        public string desCliente { get; set; }
        [DisplayName("Descripción Interna")]
        public string desInterna { get; set; }
        //Empaque Secundario
        [DisplayName("Datos del Stickers")]
        public string datosSticker { get; set; }
        [DisplayName("Datos del Adherible")]
        public string datosAdherible { get; set; }
        [DisplayName("Lado Corto")]
        public string ladoCorto { get; set; }
        [DisplayName("Lado Largo")]
        public string ladoLargo { get; set; }
        [DisplayName("Buscar en")]
        public string buscarEn { get; set; }
        [DisplayName("Armado y Cerrado")]
        public string armadoCerrado { get; set; }
        [DisplayName("Con")]
        public string con { get; set; }

        [DisplayName("Código SAP del producto o Código Interno")]
        public string codSAPP { get; set; }

        [DisplayName("Código SAP del Insumo")]
        public string codSAPI { get; set; }
        [DisplayName("Cantidad Display")]
        public string cantidaDisplay { get; set; }
        [DisplayName("Cantidad Caja Master")]
        public string cantidaCajaM { get; set; }

        public EtiquetaCanica  etiquetaCanica { get; set; }
        public EtiquetaBote  etiquetaBote { get; set; }
        public EtiquetaCaballete etiquetaCaballete { get; set; }
        public Display  display { get; set; }
        public Caja caja { get; set; }
        public Bolsa bolsa { get; set; }
    }
}