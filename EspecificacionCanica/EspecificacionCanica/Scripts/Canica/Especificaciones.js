
$(document).ready(function () {

    $("#InicioSesion").text("Cerrar Sesión")

    $("#btnBuscar").click(function () {
        var valorC = $("#txtCliente").val();
        var object = { cliente: valorC }
        $("#Encabezado").attr("hidden", "hidden")
        jQuery.ajax({
            async: true,
            url: "http://localhost:64931/CanicaE/ConsultaClientes",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(object),
            success: function (data) {

                var select = $("#Clientes");

                LimpiarDrop(select, "Seleccionar Cliente")
                $("#lblNameCliente").text("")
                $("#lblCodigoCliente").text("")
                var selectA = $("#Articulos");
                LimpiarDrop(selectA, "Seleccionar Código")

                $.each(data, function (index, itemdata) {
                    select.append($('<option/>', {
                        value: itemdata.CardCode,
                        text: itemdata.CardName
                    }));
                });

                console.log(data)
            },
            error: function (data) {
                console.log(data)
            }
        });
    })

    $("#btnCargar").click(function () {
        $("#lblCodigoCliente").text("");
        $("#lblNameCliente").text("");

        var valorC = $("#Clientes option:selected").val();
        var name = $("#Clientes option:selected").text();
        console.log(valorC)
        var object = { cliente: valorC }
        jQuery.ajax({
            async: true,
            url: "http://localhost:64931/CanicaE/ConsultaArticulo",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(object),
            success: function (data) {

                var select = $("#Articulos");
                LimpiarDrop(select, "Seleccionar Código")
                $.each(data, function (index, itemdata) {
                    select.append($('<option/>', {
                        value: itemdata.Codigo,
                        text: itemdata.Codigo
                    }));
                });
                var select = $("#Clientes");
                LimpiarDrop(select, "Seleccionar Cliente")
                $("#txtCliente").val("")
                $("#lblCodigoCliente").text(valorC);
                $("#lblNameCliente").text(name);

            },
            error: function (data) {
                console.log(data)
            }
        });

    })

    $("#btnBuscarProducto").click(function () {

        var codigoCliente = $("#lblCodigoCliente").text()
        var codArticulo = $("#Articulos option:selected").val();
        var object = { cliente: codigoCliente, codigo: codArticulo }
        jQuery.ajax({
            async: true,
            url: "http://localhost:64931/CanicaE/ConsultaEncabezado",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(object),
            success: function (data) {
                console.log(data)
                $("#Encabezado").removeAttr("hidden");
                Encabezado(data)
                if (data[0].listabote != null) {
                    Bote(data)
                    $("#Encabezado").removeAttr("hidden");
                }
                else {
                    $("#etiquetaBote").attr("hidden", "hidden")
                }
                display(data)

            },
            error: function (data) {
                console.log(data)
                alert(data)
            }
        });
    })

    function Encabezado(data) {
        $("#lblCliente").text(data[0].Cliente)
        $("#lblModelo").text(data[0].Modelo)
        $("#lblMedida").text(data[0].Medida)
        $("#lblCalibracion").text(data[0].Calibracion)
        $("#lblCodigoSAP").text(data[0].CodigoCanica)
        $("#lblNumArticulo").text(data[0].CodigoCanica)
        $("#lblColorMalla").text(data[0].CodigoCanica)
        $("#lblEmpaque").text(data[0].CodigoCanica)
        $("#lblNombreCliente").text(data[0].CodigoCanica)
    }

    function Bote(data)
    {
        $("#lblCodSapAdherible").text(data[0].listabote.AdheribleFrente)
        $("#lblCodSapTrasero").text(data[0].listabote.StickerTrasero)
        $("#lblCodBarrasTrasero").text(data[0].listabote.CBSticker)
        $("#lblCodSapBote").text(data[0].listabote.CodigoBote)
        $("#lblCodSapEsponja").text(data[0].listabote.CodigoEsponja)
        $("#lblCodSapPolipack").text(data[0].listabote.CodigoPolipack)
        $("#lblTapa").text(data[0].listabote.TituloInfoAd)
        $("#lblObservaciones").text(data[0].listabote.InformacionAd)
        $("#lblTapa").text(data[0].listabote.TituloInfoAd)
        $("#lbldescImgFrente").text(data[0].listabote.TituloImgFrente)
        $("#lbldescImgVuelta").text(data[0].listabote.TituloImgVuelta)
        $("#imgFrente").attr("src", data[0].listabote.ImgFrente);
        $("#imgVuelta").attr("src", data[0].listabote.ImgVuelta);
        $("#imgPrincipal").attr("scr", data[0].listabote.ImgPrincipal)
        $("#descImgPrincipal").text(data[0].listabote.DescImgPrinc)
       
        
        //ImgVuelta
    }
    function display(data)
    {
        $("#lblcodSAPDisplay").text(data[0].listadisplay.CodigoDisplay)
        $("#lblcodSAPStickerDisplay").text(data[0].listadisplay.CodigoSticker)
        $("#lblcodBarrasDiplay").text(data[0].listadisplay.CBSticker)
        $("#lblDescripcion").text(data[0].listadisplay.InfoDisplay)
        $("#imgDisplayPrincipal").attr("scr", data[0].listadisplay.ImgDisplay)
        
        //InfoDisplay
        //ImgDisplay
        //listadisplay
    }

    function LimpiarDrop(select, valor) {

        console.log(select)
        select.empty();
        select.append($('<option/>', {
            value: 0,
            text: valor
        }));
    }



});
