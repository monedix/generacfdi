import { AxiosResponse } from 'axios';
declare function GeneraXMLRetencion(AliasBD: string, id: number, certBase64: string, llaveBase64: string, claveLlave: string): Promise<AxiosResponse | never>;
export default GeneraXMLRetencion;
