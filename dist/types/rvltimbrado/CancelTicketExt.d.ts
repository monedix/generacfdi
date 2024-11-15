import { AxiosResponse } from 'axios';
declare function CancelTicketExt(strUserName: string, strPassword: string, base64Cfd: string, totalfactura: string, rfcreceptor: string): Promise<AxiosResponse | never>;
export default CancelTicketExt;
