import axios, { AxiosResponse, AxiosError } from 'axios';
import { RVLTIMBRADO } from '../constants/constants';

async function TimbrarCDClave(
    rfc_emisor: string,
    usuario_ws: string,
    clave_ws: string,
    cadena_xml: string,
    ClaveServicio: string,
): Promise<AxiosResponse | never> {
    try {
        const response = await axios.post(RVLTIMBRADO.URL_TIMBRAR_CD_CLAVE, {
            rfc_emisor,
            usuario_ws,
            clave_ws,
            cadena_xml,
            ClaveServicio
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
        throw new Error(`Error in TimbrarCDClave npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export default TimbrarCDClave;