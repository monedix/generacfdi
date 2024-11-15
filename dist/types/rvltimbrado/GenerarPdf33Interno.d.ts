import { AxiosResponse } from 'axios';
declare function GenerarPdf33Interno(strUserName: string, strPassword: string, XMLBase64: string, EstatusCFDI: boolean, TipoCFDI: number, Logo: string, Telefono: string, Correo: string, Observacion: string, uid: string, claveAccesoServicio: string): Promise<AxiosResponse | never>;
export default GenerarPdf33Interno;
