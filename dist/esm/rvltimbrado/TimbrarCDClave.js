var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { RVLTIMBRADO } from '../constants/constants';
function TimbrarCDClave(rfc_emisor, usuario_ws, clave_ws, cadena_xml, ClaveServicio) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios.post(RVLTIMBRADO.URL_TIMBRAR_CD_CLAVE, {
                rfc_emisor,
                usuario_ws,
                clave_ws,
                cadena_xml,
                ClaveServicio
            });
            return response;
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error;
                if (axiosError.response) {
                    return axiosError.response;
                }
                else if (axiosError.request) {
                    console.error('Request error:', axiosError.request);
                    throw new Error("Error de red: No se recibió respuesta del servidor");
                }
            }
            throw new Error(`Error in TimbrarCDClave npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    });
}
export default TimbrarCDClave;
