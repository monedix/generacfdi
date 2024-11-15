const RVLTIMBRADO = Object.freeze({
    URL_ACEPTAR_RECHAZAR_SOLICITUD_CANCELACION: "https://cfdi.realvirtual.com.mx/api/npm/AceptarRechazarSolicitudDeCancelacion",
    URL_CANCEL_TEST: "https://cfdi.realvirtual.com.mx/api/npm/CancelTest",
    URL_CANCEL_TICKET: "https://cfdi.realvirtual.com.mx/api/npm/CancelTicket",
    URL_CANCEL_TICKET_EXT: "https://cfdi.realvirtual.com.mx/api/npm/CancelTicketExt",
    URL_CANCEL_TICKET_SC: "https://cfdi.realvirtual.com.mx/api/npm/CancelTicketSC",
    URL_CONSULTAR_SOLICITUDES_PENDIENTES_CANCELACION: "https://cfdi.realvirtual.com.mx/api/npm/ConsultarSolicitudesPendientesDeCancelacion",
    URL_CREAR_XML_SOLICITUD_CANCELACION: "https://cfdi.realvirtual.com.mx/api/npm/CrearXMLSolicitudCancelacion",
    URL_ESTATUS_CFDI: "https://cfdi.realvirtual.com.mx/api/npm/EstatusCFDI",
    URL_GENERAR_PDF33: "https://cfdi.realvirtual.com.mx/api/npm/GenerarPdf33",
    URL_GENERAR_PDF33_INTERNO: "https://cfdi.realvirtual.com.mx/api/npm/GenerarPdf33Interno",
    URL_GET_TICKET: "https://cfdi.realvirtual.com.mx/api/npm/GetTicket",
    URL_GET_TICKET_AU: "https://cfdi.realvirtual.com.mx/api/npm/GetTicketAU",
    URL_GET_TICKET_CSF: "https://cfdi.realvirtual.com.mx/api/npm/GetTicketCSF",
    URL_GET_TICKET_SC: "https://cfdi.realvirtual.com.mx/api/npm/GetTicketSC",
    URL_TEST_CFD33: "https://cfdi.realvirtual.com.mx/api/npm/TestCfd33",
    URL_TEST_CFD33_SC: "https://cfdi.realvirtual.com.mx/api/npm/TestCfd33SC",
    URL_TEST_CFD33_2: "https://cfdi.realvirtual.com.mx/api/npm/TestCfd33_2",
    URL_TIMBRAR_CD_CLAVE: "https://cfdi.realvirtual.com.mx/api/npm/TimbrarCDClave",
} as const);

const RVLTIMBRADOPAC = Object.freeze({
    URL_CANCELA_LFE: "https://cfdi.realvirtual.com.mx/api/npm/CancelaLFE",
    URL_CANCELA_RV: "https://cfdi.realvirtual.com.mx/api/npm/CancelaRV",
    URL_CANCELACION_RETENCION_LFE: "https://cfdi.realvirtual.com.mx/api/npm/CancelacionRetencionLFE",
    URL_CANCELACION_RETENCION_RV: "https://cfdi.realvirtual.com.mx/api/npm/CancelacionRetencionRV",
    URL_CONSULTAR_FOLIOS: "https://cfdi.realvirtual.com.mx/api/npm/ConsultarFolios",
    URL_GENERA_CFDI33: "https://cfdi.realvirtual.com.mx/api/npm/GeneraCFDI33",
    URL_GENERAR_PDF33: "https://cfdi.realvirtual.com.mx/api/npm/GenerarPdf33",
    URL_GENERAR_PDF_CFDI: "https://cfdi.realvirtual.com.mx/api/npm/GenerarPdfCfdi",
    URL_GENERA_XML_RETENCION: "https://cfdi.realvirtual.com.mx/api/npm/GeneraXMLRetencion",
    URL_GENERAR_PDF_RETENCION: "https://cfdi.realvirtual.com.mx/api/npm/GenerarPDFRetencion",
    URL_LRV: "https://cfdi.realvirtual.com.mx/api/npm/LRV",
    URL_OBTENER_REPORTES_CFDI: "https://cfdi.realvirtual.com.mx/api/npm/ObtenerReportesCfdi",
    URL_OBTENER_DATOS: "https://cfdi.realvirtual.com.mx/api/npm/Obtenerdatos",
    URL_TIMBRADO_LFE: "https://cfdi.realvirtual.com.mx/api/npm/TimbradoLFE",
    URL_TIMBRADO_RV: "https://cfdi.realvirtual.com.mx/api/npm/TimbradoRV",
    URL_TIMBRADO_RETENCION_LFE: "https://cfdi.realvirtual.com.mx/api/npm/TimbradoRetencionLFE",
    URL_TIMBRADO_RETENCION_RV: "https://cfdi.realvirtual.com.mx/api/npm/TimbradoRetencionRV"
} as const);

const WS_CONSULTAS_CFD_REAL = Object.freeze({
    URL_CONSULTAR_ACUSE_CANCELADO_UUID: "https://cfdi.realvirtual.com.mx/api/npm/Consultar_Acuse_cancelado_UUID",
    URL_CONSULTAR_ACUSE_TIMBRADO_UUID: "https://cfdi.realvirtual.com.mx/api/npm/Consultar_Acuse_timbrado_UUID",
    URL_CONSULTAR_CFDI_UUID: "https://cfdi.realvirtual.com.mx/api/npm/Consultar_cfdi_UUID",
    URL_CONSULTAR_CFDI_TIMBRADO_UUID: "https://cfdi.realvirtual.com.mx/api/npm/Consultar_cfdi_timbrado_UUID",
    URL_CONSULTAR_CFDI_TIMBRADO_ESPECIFICO: "https://cfdi.realvirtual.com.mx/api/npm/Consultar_cfdi_timbrado_especifico",
    URL_CONSULTAR_CFDI_TIMBRADO_RANGO_FECHA: "https://cfdi.realvirtual.com.mx/api/npm/Consultar_cfdi_timbrado_rango_fecha",
    URL_CONSULTAR_CFDI_TIMBRADO_RFC_EMISOR: "https://cfdi.realvirtual.com.mx/api/npm/Consultar_cfdi_timbrado_rfc_emisor",
    URL_CONSULTAR_CREDENCIALES_USUARIO_RV: "https://cfdi.realvirtual.com.mx/api/npm/Consultar_credenciales_usuario_rv",
    URL_CONSULTAR_SERIE_FOLIO_RFC_EMISOR: "https://cfdi.realvirtual.com.mx/api/npm/Consultar_serie_folio_rfc_emisor",
    URL_CONSULTAR_TIMBRES: "https://cfdi.realvirtual.com.mx/api/npm/Consultar_timbres",
    URL_CONSULTAR_TIMBRES2: "https://cfdi.realvirtual.com.mx/api/npm/Consultar_timbres2",
    URL_CONSULTAR_CFDI_FECHA: "https://cfdi.realvirtual.com.mx/api/npm/consultar_cfdi_fecha",
} as const);

export {
    RVLTIMBRADO,
    RVLTIMBRADOPAC,
    WS_CONSULTAS_CFD_REAL
};