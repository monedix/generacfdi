import { AxiosResponse } from 'axios';
declare function GeneraPdfCfdi(Logo: string, Telefono: string, Correo: string, Vigencia: boolean, TipoCfdi: number, Observacion: string, Publicidad: boolean, XmlBase64: string): Promise<AxiosResponse | never>;
export default GeneraPdfCfdi;
