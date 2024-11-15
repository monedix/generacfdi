import { AxiosResponse } from 'axios';
declare function CrearXMLSolicitudCancelacion(strUserName: string, strPassword: string, base64cer: string, base64llave: string, clave_key: string, rfc: string, uuid: string, Motivo: string, FolioSustitucion: string): Promise<AxiosResponse | never>;
export default CrearXMLSolicitudCancelacion;
