import axios, { AxiosResponse, AxiosError } from 'axios';
import { RVLTIMBRADOPAC } from '../constants/constants';

async function GeneraPdfCfdi(
    Logo: string,
    Telefono: string,
    Correo: string,
    Vigencia: boolean,
    TipoCfdi: number,
    Observacion: string,
    Publicidad: boolean,
    XmlBase64: string,
): Promise<AxiosResponse | never> {
    try {
        const response = await axios.post(RVLTIMBRADOPAC.URL_GENERAR_PDF_CFDI, {
            Logo,
            Telefono,
            Correo,
            Vigencia,
            TipoCfdi,
            Observacion,
            Publicidad,
            XmlBase64
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
        throw new Error(`Error in GeneraPdfCfdi npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export default GeneraPdfCfdi;