import { AxiosResponse } from 'axios';
declare function EstatusCFDI(strUserName: string, strPassword: string, RfcEmisor: string, RfcReceptor: string, total: string, uuid: string): Promise<AxiosResponse | never>;
export default EstatusCFDI;
