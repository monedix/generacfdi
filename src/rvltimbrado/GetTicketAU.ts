import axios, { AxiosResponse, AxiosError } from 'axios';
import { RVLTIMBRADO } from '../constants/constants';

async function GetTicketAU(
    strUserName: string,
    strPassword: string,
    base64Cfd: string,
    rfcAdministrador: string,
    cuentaAdministrador: string,
    claveAdministrador: string
): Promise<AxiosResponse | never> {
    try {
        const response = await axios.post(RVLTIMBRADO.URL_GET_TICKET_AU, {
            strUserName,
            strPassword,
            base64Cfd,
            rfcAdministrador,
            cuentaAdministrador,
            claveAdministrador
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
        throw new Error(`Error in GetTicketAU npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export default GetTicketAU;