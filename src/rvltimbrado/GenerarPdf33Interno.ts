import axios, { AxiosResponse, AxiosError } from 'axios';
import { RVLTIMBRADO } from '../constants/constants';

async function GenerarPdf33Interno(
    strUserName: string,
    strPassword: string,
    XMLBase64: string,
    EstatusCFDI: boolean,
    TipoCFDI: number,
    Logo: string,
    Telefono: string,
    Correo: string,
    Observacion: string,
    uid: string,
    claveAccesoServicio: string
): Promise<AxiosResponse | never> {
    try {
        const response = await axios.post(RVLTIMBRADO.URL_GENERAR_PDF33_INTERNO, {
            strUserName,
            strPassword,
            XMLBase64,
            EstatusCFDI,
            TipoCFDI,
            Logo,
            Telefono,
            Correo,
            Observacion,
            uid,
            claveAccesoServicio
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
        throw new Error(`Error in GenerarPdf33Interno npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export default GenerarPdf33Interno;