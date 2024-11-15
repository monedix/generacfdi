import axios, { AxiosResponse, AxiosError } from 'axios';
import { RVLTIMBRADOPAC } from '../constants/constants';

async function GeneraXMLRetencion(
    AliasBD: string,
    id: number,
    certBase64: string,
    llaveBase64: string,
    claveLlave: string,
): Promise<AxiosResponse | never> {
    try {
        const response = await axios.post(RVLTIMBRADOPAC.URL_GENERA_XML_RETENCION, {
            AliasBD,
            id,
            certBase64,
            llaveBase64,
            claveLlave
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
        throw new Error(`Error in GeneraXMLRetencion npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export default GeneraXMLRetencion;