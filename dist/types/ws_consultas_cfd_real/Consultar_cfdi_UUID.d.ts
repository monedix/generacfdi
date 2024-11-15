import { AxiosResponse } from 'axios';
declare function Consultar_cfdi_UUID(UUID: string, fecha: string, Usuario_admin: string, Clave_admin: string, Rfc_admin: string): Promise<AxiosResponse | never>;
export default Consultar_cfdi_UUID;
