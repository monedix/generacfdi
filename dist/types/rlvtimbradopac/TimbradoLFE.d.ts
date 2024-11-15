import { AxiosResponse } from 'axios';
declare function TimbradoLFE(usuario: string, clave: string, RFC: string, Base64: string): Promise<AxiosResponse | never>;
export default TimbradoLFE;
