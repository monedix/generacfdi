import { AxiosResponse } from 'axios';
declare function Obtenerdatos(rfc: string, claveacceso: string): Promise<AxiosResponse | never>;
export default Obtenerdatos;
