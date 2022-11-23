
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
                if (data.length > 0) {
                    $("#Encabezado").removeAttr("hidden");
                    Encabezado(data)
                    insumos(data)
                    empaqueInicial(data)
                    empaqueSecundario(data)
                    empaqueFinal(data)
                    //Bote(data)
                    //caballete(data)
                    //etiquetaCanica(data)
                    //display(data)
                    encabezadoPie()
                }

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
        $("#lblNumArticulo").text(data[0].NumeroCliente)
        $("#lblColorMalla").text(data[0].ColorMalla)
        $("#lblEmpaque").text(data[0].Empaque)
        $("#lblNombreCliente").text(data[0].NombreCliente)
    }

    function Bote(data) {
        if (data[0].listabote != null) {
            $("#Encabezado").removeAttr("hidden");
            $("#etiquetaBote").removeAttr("hidden", "hidden")
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
            $("#imgPrincipalBote").attr("src", data[0].listabote.ImgPrincipal)
            $("#descImgPrincipal").text(data[0].listabote.DescImgPrinc)
        }
        else
            $("#etiquetaBote").attr("hidden", "hidden")
    }
    function display(data) {
        if (data[0].listadisplay != null) {
            $("#display").removeAttr("hidden", "hidden")
            $("#lblcodSAPDisplay").text(data[0].listadisplay.CodigoDisplay)
            $("#lblcodSAPStickerDisplay").text(data[0].listadisplay.CodigoSticker)
            $("#lblcodBarrasDiplay").text(data[0].listadisplay.CBSticker)
            $("#lblDescripcion").text(data[0].listadisplay.InfoDisplay)
            $("#imgDisplayPrincipal").attr("src", data[0].listadisplay.ImgDisplay)
        }
        else
            $("#display").attr("hidden", "hidden")
    }

    function LimpiarDrop(select, valor) {

        console.log(select)
        select.empty();
        select.append($('<option/>', {
            value: 0,
            text: valor
        }));
    }

    function caballete(data) {
        $("#tbodyCaballete").closest('tr').remove()
        if (data[0].listaMezcla != null) {
            $("#etiquetaMezcla").removeAttr("hidden");
            $("#tbodyCaballete").empty()
            var cantidadModelos = data[0].listaMezcla.length; //aqui agregar el count del data lista canicas.
            $("#lblModelosCaballete").text(cantidadModelos + " MODELOS DIFERENTES");
            $("#lblcodBarrasEtiquetaCaba").text(data[0].listaMezcla[0].CBEtiqueta)
            $("#lblcodSAPEtiquetaCaba").text(data[0].listaMezcla[0].CodEtiqueta)
            $("#lblDescripcionEtiquetaCaba").text(data[0].listaMezcla[0].Descripcion)
            $("#imgPrincipalEtiquetaCaba").attr("src", data[0].listaMezcla[0].ImgCaballete)
            //verificar que existan datos
            var htmlTbody = "";
            var dividido = cantidadModelos / 3;
            var residuo = cantidadModelos % 3;
            if (residuo != 0)
                dividido = Math.ceil(dividido)
            //var canica = data[0].listaMezcla.Modelo;
            var aux = 3;

            var auxI = 0
            for (i = 1; i <= dividido; i++) {
                htmlTbody += "<tr>"
                if (i != dividido) {
                    for (j = 1; j <= aux; j++) {
                        htmlTbody += "<td>" + data[0].listaMezcla[auxI].Modelo + "</td>"
                        auxI += 1
                    }
                }
                else {
                    if (residuo > 0) {
                        aux2 = residuo;
                        for (j = 1; j <= aux2; j++) {
                            htmlTbody += "<td>" + data[0].listaMezcla[auxI].Modelo + "</td>"
                            auxI += 1
                        }

                        for (k = 0; k < (aux - residuo) ; k++) {
                            htmlTbody += "<td>" + "</td>"
                        }
                    }
                    else {
                        for (k = 0; k < aux ; k++) {
                            htmlTbody += "<td>" + data[0].listaMezcla[auxI].Modelo + "</td>"
                            auxI += 1
                        }
                    }

                }

                htmlTbody += "</tr>"
            }



            $("#tbodyCaballete").append(htmlTbody)
        }
        else
            $("#etiquetaMezcla").attr("hidden", "hidden")
    }

    function etiquetaCanica(data) {
        $("#tbodyImagenesCanica").closest('tr').remove()
        if (data[0].listaColeccion != null) {
            $("#etiquetaCanica").removeAttr("hidden");
            $("#lblCodBarrasEtiquetaC").text(data[0].listaColeccion[0].CBEtiqueta)
            $("#imgPrincipalEtiquetaC").attr("src", data[0].listaColeccion[0].ImgFrente)
            $("#imgVueltaEtiquetaC").attr("src", data[0].listaColeccion[0].ImgVuelta)
            $("#imgCodBarrasColeccion").attr("src", data[0].listaColeccion[0].ImgCodBarras)

            $("#tbodyImagenesCanica").empty()
            $("#tbodyCanica").empty()
            var cantidad = 4; //Canicas aqui va el length del data de canicas
            var htmlTbody = "";
            for (i = 0; i < cantidad; i++) {
                htmlTbody += "<tr>"
                htmlTbody += "<td>" + (i + 1) + "</td>"
                htmlTbody += "<td>" + data[0].listaColeccion[i].NombreProduccion + "</td>"
                htmlTbody += "<td>" + data[0].listaColeccion[i].NombreCliente + "</td>"
                htmlTbody += "<td>" + data[0].listaColeccion[i].CodigoEtiqueta + "</td>"
                htmlTbody += "<tr>"
            }
            $("#tbodyCanica").append(htmlTbody)
            //////////////agregar imagenes de 2 en dos 
            htmlTbody = "";
            var dividido = cantidad / 2
            var residuo = cantidad % 2
            if (residuo != 0)
                dividido = Math.ceil(dividido)
            var canica = "Conde";
            var aux = 2;
            var auxi = 0;

            for (i = 1; i <= dividido; i++) {
                htmlTbody += "<tr>"
                if (i != dividido) {
                    for (j = 1; j <= aux; j++) {
                        htmlTbody += "<td>" + "<label>" + (auxi + 1) + "</label><img src='" + data[0].listaColeccion[auxi].ImgCanica + "'/></td>"
                        auxi += 1
                    }
                }
                else {
                    if (residuo > 0) {
                        aux2 = residuo;
                        for (j = 1; j <= aux2; j++) {
                            htmlTbody += "<td>" + "<label>" + (auxi + 1) + "</label><img src='" + data[0].listaColeccion[auxi].ImgCanica + "'/></td>"
                            auxi += 1
                        }

                        for (k = 0; k < (aux - residuo) ; k++) {
                            htmlTbody += "<td>" + "</td>"
                        }
                    }
                    else {
                        for (k = 0; k < aux ; k++) {
                            htmlTbody += "<td>" + "<label>" + (auxi + 1) + "</label><img src='" + data[0].listaColeccion[auxi].ImgCanica + "'/></td>"
                            auxi += 1
                        }
                    }

                }

                htmlTbody += "</tr>"
            }

            console.log(htmlTbody)
            $("#tbodyImagenesCanica").append(htmlTbody)
        }
        else {
            $("#etiquetaCanica").attr("hidden", "hidden")

        }
    }

    function insumos(data) {
        var htmlTbody = "";
        var cantidadInsumo = data[0].listaInsumos.length;
        var cantidadOtro = data[0].listaOtrosInsumos.length;
        var cantidad = 0;

        if (cantidadInsumo > cantidadOtro)
            cantidad = cantidadInsumo
        else
            cantidad = cantidadOtro


        for (i = 0; i < cantidad; i++) {

            if (cantidadInsumo == cantidadOtro) {
                htmlTbody += "<tr>"
                htmlTbody += "<td>" + data[0].listaInsumos[i].CodigoProducto + "</td>"
                htmlTbody += "<td>" + data[0].listaInsumos[i].ItemName + "</td>"
                htmlTbody += "<td>" + data[0].listaInsumos[i].Medida + "</td>"
                htmlTbody += "<td>" + data[0].listaOtrosInsumos[i].ItemName + "</td>"
                htmlTbody += "<td>" + data[0].listaOtrosInsumos[i].CodigoProducto + "</td>"
                htmlTbody += "<td>" + "</td>"
                htmlTbody += "<td>" + data[0].listaOtrosInsumos[i].Cantidad + "</td>"
                htmlTbody += "</tr>"
            }
            else if (cantidadInsumo < cantidadOtro) {
                htmlTbody += "<tr>"

                if (i < cantidadInsumo) {
                    htmlTbody += "<td>" + data[0].listaInsumos[i].CodigoProducto + "</td>"
                    htmlTbody += "<td>" + data[0].listaInsumos[i].ItemName + "</td>"
                    htmlTbody += "<td>" + data[0].listaInsumos[i].Medida + "</td>"
                }
                else {
                    htmlTbody += "<td>" + "</td>"
                    htmlTbody += "<td>" + "</td>"
                    htmlTbody += "<td>" + "</td>"
                }
                htmlTbody += "<td>" + data[0].listaOtrosInsumos[i].ItemName + "</td>"
                htmlTbody += "<td>" + data[0].listaOtrosInsumos[i].CodigoProducto + "</td>"
                htmlTbody += "<td>" + "</td>"
                htmlTbody += "<td>" + data[0].listaOtrosInsumos[i].Cantidad + "</td>"

                htmlTbody += "</tr>"
            }
            else if (cantidadInsumo > cantidadOtro) {
                htmlTbody += "<tr>"

                htmlTbody += "<td>" + data[0].listaInsumos[i].CodigoProducto + "</td>"
                htmlTbody += "<td>" + data[0].listaInsumos[i].ItemName + "</td>"
                htmlTbody += "<td>" + data[0].listaInsumos[i].Medida + "</td>"

                if (i < cantidadOtro) {
                    htmlTbody += "<td>" + data[0].listaOtrosInsumos[i].ItemName + "</td>"
                    htmlTbody += "<td>" + data[0].listaOtrosInsumos[i].CodigoProducto + "</td>"
                    htmlTbody += "<td>" + "</td>"
                    htmlTbody += "<td>" + data[0].listaOtrosInsumos[i].Cantidad + "</td>"
                }
                else {
                    htmlTbody += "<td>" + "</td>"
                    htmlTbody += "<td>" + "</td>"
                    htmlTbody += "<td>" + "</td>"
                    htmlTbody += "<td>" + "</td>"
                }

                htmlTbody += "</tr>"
            }

        }
        $("#tbodyInsumo").append(htmlTbody)
    }

    function empaqueInicial(data) {
        $("#InsEmpInicial").text(data[0].listaEmpaqueInicial[0].InstEmpaque)
        $("#codBarrasEI").text(data[0].listaEmpaqueInicial[0].CodBarras)
        $("#NomEmpInicial").text(data[0].listaEmpaqueInicial[0].NomEmpInicial)
        $("#infoAdicionalEI").text(data[0].listaEmpaqueInicial[0].InfAdicional)
        productosEI(data)
        imgsEI(data)


    }

    function productosEI(data) {
        var htmlTbody = "";
        var cantidad = data[0].listaEmpaqueInicial.length;
        for (i = 0; i < cantidad; i++) {
            htmlTbody += "<tr>"
            htmlTbody += "<td>" + data[0].listaEmpaqueInicial[i].CodProd + "</td>"
            htmlTbody += "<td>" + data[0].listaEmpaqueInicial[i].NomProd + "</td>"
            htmlTbody += "<td>" + data[0].listaEmpaqueInicial[i].NombCli + "</td>"
            htmlTbody += "<td>" + data[0].listaEmpaqueInicial[i].Medida + "</td>"
            htmlTbody += "<td>" + data[0].listaEmpaqueInicial[i].Cantidad + "</td>"
            htmlTbody += "</tr>"
        }
        $("#tbodyProductosEI").append(htmlTbody)
    }

    function imgsEI(data) {
        var htmlTbody = "";
        var cantidad = data[0].listaEmpaqueInicial.length
        $("#thImgEI").attr('colspan', cantidad);
        htmlTbody += "<tr>"
        for (i = 0; i < cantidad; i++) {
            if (data[0].listaEmpaqueInicial[i].ImgEmpaque != "")
                htmlTbody += "<td ><img style='width:80px!important'  src='" + data[0].listaEmpaqueInicial[i].ImgEmpaque + "'/></td>"
        }
        htmlTbody += "</tr>"

        htmlTbody += "<tr>"
        for (i = 0; i < cantidad; i++) {
            if (data[0].listaEmpaqueInicial[i].ImgCanica != "")
                htmlTbody += "<td><img  style='width:80px!important' src='" + data[0].listaEmpaqueInicial[i].ImgCanica + "'/></td>"
        }
        htmlTbody += "</tr>"

        $("#tbodyImgEI").append(htmlTbody)
    }

    function empaqueSecundario(data)
    {
        $("#InsEmpSecundario").text(data[0].listaEmpaqueSecundario[0].InstruccionEmp)
        $("#NomEmpSecu").text(data[0].listaEmpaqueSecundario[0].DesCliente)
        $("#codBarrasES").text(data[0].listaEmpaqueSecundario[0].CodBarras)
        $("#tdREFES").text(data[0].listaEmpaqueSecundario[0].REF)
        $("#tdDesignationES").text(data[0].listaEmpaqueSecundario[0].Designation)
        $("#tdNumeroES").text(data[0].listaEmpaqueSecundario[0].BarCode)
        $("#infoAdicionalES").text(data[0].listaEmpaqueSecundario[0].InfAdicional)
        imgsES(data)

    }

    function imgsES(data)
    {
        $("#Img1ES").attr("src", data[0].listaEmpaqueSecundario[0].Img1)
        $("#Img2ES").attr("src", data[0].listaEmpaqueSecundario[0].Img2)
        
    }

    function empaqueFinal(data)
    {
        $("#InsEmpFinal").text(data[0].listaEmpaqueFinal[0].InstEmpaque)
        $("#codBarrasEF").text(data[0].listaEmpaqueFinal[0].CodBarras)
        $("#NomEmpFinal").text(data[0].listaEmpaqueFinal[0].NomEmpFinal)
        $("#infoAdicionalEF").text(data[0].listaEmpaqueFinal[0].InfAdicional)
        $("#tdArmado").text(data[0].listaEmpaqueFinal[0].Armado)
        $("#tdCerrado").text(data[0].listaEmpaqueFinal[0].Cerrado)
        imgsEF(data)
    }
    function imgsEF(data) {
        $("#ImgLargo").attr("src", data[0].listaEmpaqueFinal[0].ImgLargo)
        $("#ImgCorto").attr("src", data[0].listaEmpaqueFinal[0].ImgCorto)

    }
    function encabezadoPie() {
        //var a = this.getDate()
        //console.log(a)
        //$("#lblFecha").text(getDate())
        var usuario = $("#lblUsuario").text()
        $("#lblRealizado").text(usuario)
        $("#lblAprobada").text()
    }
});
