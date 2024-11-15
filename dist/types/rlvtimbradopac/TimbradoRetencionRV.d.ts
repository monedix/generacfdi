import { AxiosResponse } from 'axios';
declare function TimbradoRetencionRV(usuario: string, clave: string, RFC: string, Base64: string, datosAdicionales: string): Promise<AxiosResponse | never>;
export default TimbradoRetencionRV;
