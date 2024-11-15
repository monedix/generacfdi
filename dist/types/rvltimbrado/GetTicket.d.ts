import { AxiosResponse } from 'axios';
declare function GetTicket(strUserName: string, strPassword: string, base64Cfd: string): Promise<AxiosResponse | never>;
export default GetTicket;
