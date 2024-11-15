import { AxiosResponse } from 'axios';
declare function GenerarPdf33(Logo: string, Telefono: string, Correo: string, Vigencia: boolean, TipoCfdi: number, Observacion: string, Publicidad: boolean, XmlBase64: string): Promise<AxiosResponse | never>;
export default GenerarPdf33;
