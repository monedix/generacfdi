import axios, { AxiosResponse, AxiosError } from 'axios';
import { RVLTIMBRADOPAC } from '../constants/constants';

async function GeneraCFDI33(
    LayOutTexto: string,
    CertB64: string,
    LlaveB64: string,
    ClaveLlave: string,
    UrlXSLT: string,
): Promise<AxiosResponse | never> {
    try {
        const response = await axios.post(RVLTIMBRADOPAC.URL_GENERA_CFDI33, {
            LayOutTexto,
            CertB64,
            LlaveB64,
            ClaveLlave,
            UrlXSLT
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
        throw new Error(`Error in GeneraCFDI33 npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export default GeneraCFDI33;