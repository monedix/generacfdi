import axios, { AxiosResponse, AxiosError } from 'axios';
import { WS_CONSULTAS_CFD_REAL } from '../constants/constants';

async function Consultar_credenciales_usuario_rv(
    rfc_consultar: string,
    Clave_admin: string
): Promise<AxiosResponse | never> {
    try {
        const response = await axios.post(WS_CONSULTAS_CFD_REAL.URL_CONSULTAR_CREDENCIALES_USUARIO_RV, {
            rfc_consultar,
            Clave_admin
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
        throw new Error(`Error in Consultar_credenciales_usuario_rv npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export default Consultar_credenciales_usuario_rv;