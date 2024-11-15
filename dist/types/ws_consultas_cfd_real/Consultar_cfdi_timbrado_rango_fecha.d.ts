import { AxiosResponse } from 'axios';
declare function Consultar_cfdi_timbrado_rango_fecha(rfc_emisor: string, rfc_receptor: string, fecha_inicio: string, fecha_fin: string, Usuario_admin: string, Clave_admin: string): Promise<AxiosResponse | never>;
export default Consultar_cfdi_timbrado_rango_fecha;
