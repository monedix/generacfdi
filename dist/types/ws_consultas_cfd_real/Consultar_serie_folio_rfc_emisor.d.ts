import { AxiosResponse } from 'axios';
declare function Consultar_serie_folio_rfc_emisor(rfc_emisor: string, serie: string, folio: string, Usuario_admin: string, Clave_admin: string, rfc_admin: string): Promise<AxiosResponse | never>;
export default Consultar_serie_folio_rfc_emisor;
