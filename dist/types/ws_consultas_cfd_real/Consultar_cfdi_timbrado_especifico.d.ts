import { AxiosResponse } from 'axios';
declare function Consultar_cfdi_timbrado_especifico(rfc_emisor: string, rfc_receptor: string, serie: string, folio: string, fecha_emision: string, total: string, Usuario_admin: string, Clave_admin: string): Promise<AxiosResponse | never>;
export default Consultar_cfdi_timbrado_especifico;
