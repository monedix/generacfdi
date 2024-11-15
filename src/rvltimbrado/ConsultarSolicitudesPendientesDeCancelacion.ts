import axios, { AxiosResponse, AxiosError } from 'axios';
import { RVLTIMBRADO } from '../constants/constants';

async function ConsultarSolicitudesPendientesDeCancelacion(
    strUserName: string,
    strPassword: string,
    RfcReceptor: string,
    produccion: boolean
): Promise<AxiosResponse | never> {
    try {
        const response = await axios.post(RVLTIMBRADO.URL_CONSULTAR_SOLICITUDES_PENDIENTES_CANCELACION, {
            strUserName,
            strPassword,
            RfcReceptor,
            produccion
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
        throw new Error(`Error in ConsultarSolicitudesPendientesDeCancelacion npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export default ConsultarSolicitudesPendientesDeCancelacion;