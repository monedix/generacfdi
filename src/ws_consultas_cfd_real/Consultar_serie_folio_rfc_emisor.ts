import axios, { AxiosResponse, AxiosError } from 'axios';
import { WS_CONSULTAS_CFD_REAL } from '../constants/constants';

async function Consultar_serie_folio_rfc_emisor(
    rfc_emisor: string,
    serie: string,
    folio: string,
    Usuario_admin: string,
    Clave_admin: string,
    rfc_admin: string
): Promise<AxiosResponse | never> {
    try {
        const response = await axios.post(WS_CONSULTAS_CFD_REAL.URL_CONSULTAR_SERIE_FOLIO_RFC_EMISOR, {
            rfc_emisor,
            serie,
            folio,
            Usuario_admin,
            Clave_admin,
            rfc_admin
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
        throw new Error(`Error in Consultar_serie_folio_rfc_emisor npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export default Consultar_serie_folio_rfc_emisor;