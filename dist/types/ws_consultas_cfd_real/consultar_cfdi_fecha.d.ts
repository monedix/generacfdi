import { AxiosResponse } from 'axios';
declare function consultar_cfdi_fecha(rfc_emisor: string, fecha_inicio: string, fecha_fin: string, Usuario_admin: string, Clave_admin: string): Promise<AxiosResponse | never>;
export default consultar_cfdi_fecha;
