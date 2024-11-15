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
import { WS_CONSULTAS_CFD_REAL } from '../constants/constants';
function Consultar_credenciales_usuario_rv(rfc_consultar, Clave_admin) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios.post(WS_CONSULTAS_CFD_REAL.URL_CONSULTAR_CREDENCIALES_USUARIO_RV, {
                rfc_consultar,
                Clave_admin
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
            throw new Error(`Error in Consultar_credenciales_usuario_rv npm package: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    });
}
export default Consultar_credenciales_usuario_rv;
