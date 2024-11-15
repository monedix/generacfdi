import { AxiosResponse } from 'axios';
declare function ObtenerReportesCfdi(opcion: string, alias: string, servicio: string, proceso: string, datos: string): Promise<AxiosResponse | never>;
export default ObtenerReportesCfdi;
