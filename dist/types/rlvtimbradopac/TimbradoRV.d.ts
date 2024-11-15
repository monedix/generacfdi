import { AxiosResponse } from 'axios';
declare function TimbradoRV(usuario: string, clave: string, RFC: string, Base64: string, datosAdicionales: string): Promise<AxiosResponse | never>;
export default TimbradoRV;
