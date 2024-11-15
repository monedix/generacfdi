import axios, { AxiosResponse, AxiosError } from 'axios';
import { WS_CONSULTAS_CFD_REAL } from '../constants/constants';

async function consultar_cfdi_fecha(
    rfc_emisor: string,
    fecha_inicio: string,
    fecha_fin: string,
    Usuario_admin: string,
    Clave_admin: string
): Promise<AxiosResponse | never> {
    try {
        const response = await axios.post(WS_CONSULTAS_CFD_REAL.URL_CONSULTAR_CFDI_FECHA, {
            rfc_emisor,
            fecha_inicio,
            fecha_fin,
            Usuario_admin,
            Clave_admin
        });

        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                return axiosError.response;
            } else if (axiosError.request) {
                console.error('Request error:', axiosError.request);
                throw new Error("Error de red: No se recibió respuesta del servidor");
            }
        }
        throw new Error(`Error in consultar_cfdi_fecha npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export default consultar_cfdi_fecha;