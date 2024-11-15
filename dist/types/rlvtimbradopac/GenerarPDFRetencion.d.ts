import { AxiosResponse } from 'axios';
declare function GenerarPDFRetencion(XmlBase64: string, TipoReporte: number, QrCode: string, Logo: string): Promise<AxiosResponse | never>;
export default GenerarPDFRetencion;
