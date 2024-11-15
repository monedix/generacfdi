import { AxiosResponse } from 'axios';
declare function GetTicketAU(strUserName: string, strPassword: string, base64Cfd: string, rfcAdministrador: string, cuentaAdministrador: string, claveAdministrador: string): Promise<AxiosResponse | never>;
export default GetTicketAU;
