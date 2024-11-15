import { AxiosResponse } from 'axios';
declare function CancelTicket(strUserName: string, strPassword: string, base64Cfd: string): Promise<AxiosResponse | never>;
export default CancelTicket;
