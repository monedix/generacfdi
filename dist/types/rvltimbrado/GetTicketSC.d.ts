import { AxiosResponse } from 'axios';
declare function GetTicketSC(strUserName: string, strPassword: string, base64Cfd: string): Promise<AxiosResponse | never>;
export default GetTicketSC;
