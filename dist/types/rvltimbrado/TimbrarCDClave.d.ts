import { AxiosResponse } from 'axios';
declare function TimbrarCDClave(rfc_emisor: string, usuario_ws: string, clave_ws: string, cadena_xml: string, ClaveServicio: string): Promise<AxiosResponse | never>;
export default TimbrarCDClave;
