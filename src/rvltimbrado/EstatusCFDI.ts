import axios, { AxiosResponse, AxiosError } from 'axios';
import { RVLTIMBRADO } from '../constants/constants';

async function EstatusCFDI(
    strUserName: string,
    strPassword: string,
    RfcEmisor: string,
    RfcReceptor: string,
    total: string,
    uuid: string
): Promise<AxiosResponse | never> {
    try {
        const response = await axios.post(RVLTIMBRADO.URL_ESTATUS_CFDI, {
            strUserName,
            strPassword,
            RfcEmisor,
            RfcReceptor,
            total,
            uuid
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
        throw new Error(`Error in EstatusCFDI npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export default EstatusCFDI;