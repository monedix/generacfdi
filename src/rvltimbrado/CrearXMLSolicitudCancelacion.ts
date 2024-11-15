import axios, { AxiosResponse, AxiosError } from 'axios';
import { RVLTIMBRADO } from '../constants/constants';

async function CrearXMLSolicitudCancelacion(
    strUserName: string,
    strPassword: string,
    base64cer: string,
    base64llave: string,
    clave_key: string,
    rfc: string,
    uuid: string,
    Motivo: string,
    FolioSustitucion: string
): Promise<AxiosResponse | never> {
    try {
        const response = await axios.post(RVLTIMBRADO.URL_CREAR_XML_SOLICITUD_CANCELACION, {
            strUserName,
            strPassword,
            base64cer,
            base64llave,
            clave_key,
            rfc,
            uuid,
            Motivo,
            FolioSustitucion
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
        throw new Error(`Error in CrearXMLSolicitudCancelacion npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export default CrearXMLSolicitudCancelacion;