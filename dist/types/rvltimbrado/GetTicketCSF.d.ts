import { AxiosResponse } from 'axios';
declare function GetTicketCSF(strUserName: string, strPassword: string, base64Cfd: string): Promise<AxiosResponse | never>;
export default GetTicketCSF;
