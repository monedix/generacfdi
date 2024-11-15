import { AxiosResponse } from 'axios';
declare function AceptarRechazarSolicitudDeCancelacion(strUserName: string, strPassword: string, xml: string, produccion: boolean, aceptacion: boolean): Promise<AxiosResponse | never>;
export default AceptarRechazarSolicitudDeCancelacion;
