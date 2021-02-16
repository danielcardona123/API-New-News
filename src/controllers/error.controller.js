//Importamos nuestra lista de errores  de los autenticadores
import { authErrorList } from '../libs/auth.error';
import { TokenErrorList } from '../libs/token.error';
import { validationResult } from 'express-validator';

export default class ErrorController {
    constructor() {
        this.ErroList = authErrorList;
        this._TokenErrorList = TokenErrorList;
    }
    //Aqui se manejan todos los estados de error y las respuestas que le damos al usuario
    AuthErrorResponse(res, code) {
        switch (code) {
            //Error de usuario no encontrado en la base de datos
            case 1001:
                return res.status(this.ErroList._1001.status).json({
                    message: this.ErroList._1001.message,
                    method: this.ErroList._1001.method,
                    code: this.ErroList._1001.code,
                    value: this.ErroList._1001.value
                });

            //La contraseña del usuario no es correcta
            case 1002:
                return res.status(this.ErroList._1002.status).json({
                    message: this.ErroList._1002.message,
                    method: this.ErroList._1002.method,
                    code: this.ErroList._1002.code,
                    value: this.ErroList._1002.value
                });
            //La informacion que se requiere del usuario no está completa
            case 1003:
                return res.status(this.ErroList._1003.status).json({
                    message: this.ErroList._1003.message,
                    method: this.ErroList._1003.method,
                    code: this.ErroList._1003.code,
                    value: this.ErroList._1003.value
                });

            //Error por defecto no encontrado
            default:
                return res.status(this.ErroList.default.status).json({
                    message: this.ErroList.default.message,
                    method: this.ErroList.default.method,
                    code: this.ErroList.default.code,
                    value: this.ErroList.default.value
                });
        }
    }
    //Errrores especificos del registro de usuario
    AuthErrorResponseSignup(res, code) {
        switch (code) {
            //El usuario se encuentra registrado en la base de datos
            case 1004:
                return res.status(this.ErroList._1004.status).json({
                    message: this.ErroList._1004.message,
                    method: this.ErroList._1004.method,
                    code: this.ErroList._1004.code,
                    value: this.ErroList._1004.value
                });

            //El correo del usuario se encuentra registrado en la base de datos
            case 1005:
                return res.status(this.ErroList._1005.status).json({
                    message: this.ErroList._1005.message,
                    method: this.ErroList._1005.method,
                    code: this.ErroList._1005.code,
                    value: this.ErroList._1005.value
                });

            //No se encontró algun rol que recibino de nuestro usuario
            case 1006:
                return res.status(this.ErroList._1006.status).json({
                    message: this.ErroList._1006.message,
                    method: this.ErroList._1006.method,
                    code: this.ErroList._1006.code,
                    value: this.ErroList._1006.value
                });

            //Error al crear un usuario
            case 1007:
                return res.status(this.ErroList._1007.status).json({
                    message: this.ErroList._1007.message,
                    method: this.ErroList._1007.method,
                    code: this.ErroList._1007.code,
                    value: this.ErroList._1007.value
                });
            //Datos invalidos
            case 1008:
                return res.status(this.ErroList._1008.status).json({
                    message: `${this.ErroList._1008.message}`,
                    method: this.ErroList._1008.method,
                    code: this.ErroList._1008.code,
                    value: this.ErroList._1008.value
                });

            default:
                return res.status(this.ErroList.default.status).json({
                    message: this.ErroList.default.message,
                    method: this.ErroList.default.method,
                    code: this.ErroList.default.code,
                    value: this.ErroList.default.value
                });
        }
    }

    //Validamos si alguin parametro no tiene validez
    ParamError(req, res, next) {
        const _errors = validationResult(req);
        if (!_errors.isEmpty()) {
            return res.status(400).json({
                message: `Formato incorrecto: ${_errors.errors[0].param}`,
                method: 'Authentication Signup',
                code: 1008,
                value: false
            });
        }

        next();
    }


    //Errores de validacion del token

    TokenValidationResponse(res, code) {
        switch (code) {
            case 2000:
                return res.status(this._TokenErrorList._2000.status).json({
                    message: this._TokenErrorList._2000.message,
                    method: this._TokenErrorList._2000.method,
                    code: this._TokenErrorList._2000.code,
                    value: this._TokenErrorList._2000.value
                });

            case 2001:
                return res.status(this._TokenErrorList._2001.status).json({
                    message: this._TokenErrorList._2001.message,
                    method: this._TokenErrorList._2001.method,
                    code: this._TokenErrorList._2001.code,
                    value: this._TokenErrorList._2001.value
                });

            default:
                return res.status(this.ErroList.default.status).json({
                    message: this.ErroList.default.message,
                    method: this.ErroList.default.method,
                    code: this.ErroList.default.code,
                    value: this.ErroList.default.value
                });
        }
    }
}