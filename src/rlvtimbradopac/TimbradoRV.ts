import axios, { AxiosResponse, AxiosError } from 'axios';
import { RVLTIMBRADOPAC } from '../constants/constants';

async function TimbradoRV(
    usuario: string,
    clave: string,
    RFC: string,
    Base64: string,
    datosAdicionales: string
): Promise<AxiosResponse | never> {
    try {
        const response = await axios.post(RVLTIMBRADOPAC.URL_TIMBRADO_RV, {
            usuario,
            clave,
            RFC,
            Base64,
            datosAdicionales
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
        throw new Error(`Error in TimbradoRV npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export default TimbradoRV;