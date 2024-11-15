import axios, { AxiosResponse, AxiosError } from 'axios';
import { RVLTIMBRADO } from '../constants/constants';

async function AceptarRechazarSolicitudDeCancelacion(
    strUserName: string,
    strPassword: string,
    xml: string,
    produccion: boolean,
    aceptacion: boolean
): Promise<AxiosResponse | never> {
    try {
        const response = await axios.post(RVLTIMBRADO.URL_ACEPTAR_RECHAZAR_SOLICITUD_CANCELACION, {
            strUserName,
            strPassword,
            xml,
            produccion,
            aceptacion
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
        throw new Error(`Error in AceptarRechazarSolicitudDeCancelacion npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export default AceptarRechazarSolicitudDeCancelacion;