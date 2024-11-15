import { AxiosResponse } from 'axios';
declare function ConsultarFolios(RFC: string, usuario: string, clave: string): Promise<AxiosResponse | never>;
export default ConsultarFolios;
