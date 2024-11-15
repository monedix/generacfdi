declare module 'generacfdi' {
    import { AxiosResponse } from 'axios';
    
    //rvltimbrado
    export function AceptarRechazarSolicitudDeCancelacion(strUserName: string, strPassword: string, xml: string, produccion: boolean, aceptacion: boolean): Promise<AxiosResponse | never>;
    export function CancelTest(strUserName: string, strPassword: string, CanB64: string): Promise<AxiosResponse | never>;
    export function CancelTicket(strUserName: string, strPassword: string, base64Cfd: string): Promise<AxiosResponse | never>;
    export function CancelTicketExt(strUserName: string, strPassword: string, base64Cfd: string, totalfactura: string, rfcreceptor: string): Promise<AxiosResponse | never>;
    export function CancelTicketSC(strUserName: string, strPassword: string, base64Cfd: string): Promise<AxiosResponse | never>;
    export function ConsultarSolicitudesPendientesDeCancelacion(strUserName: string, strPassword: string, RfcReceptor: string, produccion: boolean): Promise<AxiosResponse | never>;
    export function CrearXMLSolicitudCancelacion(strUserName: string, strPassword: string, base64cer: string, base64llave: string, clave_key: string, rfc: string, uuid: string, Motivo: string, FolioSustitucion: string): Promise<AxiosResponse | never>;
    export function EstatusCFDI(strUserName: string, strPassword: string, RfcEmisor: string, RfcReceptor: string, total: string, uuid: string): Promise<AxiosResponse | never>;
    export function GenerarPdf33(strUserName: string, strPassword: string, XMLBase64: string, EstatusCFDI: boolean, TipoCFDI: number, Logo: string, Telefono: string, Correo: string, Observacion: string): Promise<AxiosResponse | never>;
    export function GenerarPdf33Interno(strUserName: string, strPassword: string, XMLBase64: string, EstatusCFDI: boolean, TipoCFDI: number, Logo: string, Telefono: string, Correo: string, Observacion: string, uid: string, claveAccesoServicio: string): Promise<AxiosResponse | never>;
    export function GetTicket(strUserName: string, strPassword: string, base64Cfd: string): Promise<AxiosResponse | never>;
    export function GetTicketAU(strUserName: string, strPassword: string, base64Cfd: string, rfcAdministrador: string, cuentaAdministrador: string, claveAdministrador: string): Promise<AxiosResponse | never>;
    export function GetTicketCSF(strUserName: string, strPassword: string, base64Cfd: string): Promise<AxiosResponse | never>;
    export function GetTicketSC(strUserName: string, strPassword: string, base64Cfd: string): Promise<AxiosResponse | never>;
    export function TestCfd33(strUserName: string, strPassword: string, base64Cfd: string): Promise<AxiosResponse | never>;
    export function TestCfd33SC(strUserName: string, strPassword: string, base64Cfd: string): Promise<AxiosResponse | never>;
    export function TestCfd33_2(strUserName: string, strPassword: string, base64Cfd: string): Promise<AxiosResponse | never>;
    export function TimbrarCDClave(rfc_emisor: string, usuario_ws: string, clave_ws: string, base64Cfd: string, cadena_xml: string, ClaveServicio: string): Promise<AxiosResponse | never>;

    //rvltimbradopac
    export function CancelaLFE(usuario: string, clave: string, RFC: string, Base64: string): Promise<AxiosResponse | never>;
    export function CancelaRV(usuario: string, clave: string, RFC: string, Base64: string): Promise<AxiosResponse | never>;
    export function CancelacionRetencionLFE(usuario: string, clave: string, RFC: string, Base64: string, LlavePrivadaBase64: string): Promise<AxiosResponse | never>;
    export function CancelacionRetencionRV(usuario: string, clave: string, RFC: string, Base64: string, LlavePrivadaBase64: string): Promise<AxiosResponse | never>;
    export function ConsultarFolios(RFC: string, usuario: string, clave: string): Promise<AxiosResponse | never>;
    export function GeneraCFDI33(LayOutTexto: string, CertB64: string, LlaveB64: string, ClaveLlave: string, UrlXSLT: string): Promise<AxiosResponse | never>;
    export function GeneraPdfCfdi(Logo: string, Telefono: string, Correo: string, Vigencia: boolean, TipoCfdi: number, Observacion: string, Publicidad: boolean, XmlBase64: string): Promise<AxiosResponse | never>;
    export function GeneraXMLRetencion(AliasBD: string, id: number, certBase64: string, llaveBase64: string, claveLlave: string): Promise<AxiosResponse | never>;
    export function GenerarPDFRetencion(XmlBase64: string, TipoReporte: number, QrCode: string, Logo: string): Promise<AxiosResponse | never>;
    export namespace rvltimbradopac {
        export function GenerarPdf33(Logo: string, Telefono: string, Correo: string, Vigencia: boolean, TipoCfdi: number, Observacion: string, Publicidad: boolean, XmlBase64: string): Promise<AxiosResponse | never>;
    }
    export function LRV(opcion: string, alias: string, servicio: string, proceso: string, datos: string): Promise<AxiosResponse | never>;
    export function ObtenerReportesCfdi(Version: number, Rfc: string): Promise<AxiosResponse | never>;
    export function Obtenerdatos(rfc: number, claveacceso: string): Promise<AxiosResponse | never>;
    export function TimbradoLFE(usuario: string, clave: string, RFC: string, Base64: string): Promise<AxiosResponse | never>;
    export function TimbradoRV(usuario: string, clave: string, RFC: string, Base64: string, datosAdicionales: string): Promise<AxiosResponse | never>;
    export function TimbradoRetencionLFE(usuario: string, clave: string, RFC: string, Base64: string): Promise<AxiosResponse | never>;
    export function TimbradoRetencionRV(usuario: string, clave: string, RFC: string, Base64: string, datosAdicionales: string): Promise<AxiosResponse | never>;

    //ws_consultas_cfd_real
    export function Consultar_Acuse_cancelado_UUID(UUID: string, Usuario_admin: string, Clave_admin: string, Rfc_admin: string): Promise<AxiosResponse | never>;
    export function Consultar_Acuse_timbrado_UUID(UUID: string, Usuario_admin: string, Clave_admin: string, Rfc_admin: string): Promise<AxiosResponse | never>;
    export function Consultar_cfdi_UUID(UUID: string, fecha: string, Usuario_admin: string, Clave_admin: string, Rfc_admin: string): Promise<AxiosResponse | never>;
    export function Consultar_cfdi_timbrado_UUID(UUID: string, Usuario_admin: string, Clave_admin: string, Rfc_admin: string): Promise<AxiosResponse | never>;
    export function Consultar_cfdi_timbrado_especifico(rfc_emisor: string, rfc_receptor: string, serie: string, folio: string, fecha_emision: string, total: string, Usuario_admin: string, Clave_admin: string): Promise<AxiosResponse | never>;
    export function Consultar_cfdi_timbrado_rango_fecha(rfc_emisor: string, rfc_receptor: string, fecha_inicio: string, fecha_fin: string, Usuario_admin: string, Clave_admin: string): Promise<AxiosResponse | never>;
    export function Consultar_cfdi_timbrado_rfc_emisor(rfc_emisor: string, Usuario_admin: string, Clave_admin: string): Promise<AxiosResponse | never>;
    export function Consultar_credenciales_usuario_rv(rfc_consultar: string, Clave_admin: string): Promise<AxiosResponse | never>;
    export function Consultar_serie_folio_rfc_emisor(rfc_emisor: string, serie: string, folio: string, Usuario_admin: string, Clave_admin: string, rfc_admin: string): Promise<AxiosResponse | never>;
    export function Consultar_timbres(rfc: string): Promise<AxiosResponse | never>;
    export function Consultar_timbres2(rfc: string, Usuario_admin: string, Clave_admin: string): Promise<AxiosResponse | never>;
    export function consultar_cfdi_fecha(rfc_emisor: string, fecha_inicio: string, fecha_fin: string, Usuario_admin: string, Clave_admin: string): Promise<AxiosResponse | never>;
}