import RepositorioUsuarioPG from "@/util/externals/db/RepositorioUsuarioPG";
import CasoDeUso from "../../shared/casoDeUso";
import Usuario from "../model/Usuario";
import Erros from "../../shared/Erros";
import ProvedorCriptografia from "./ProvedorCriptografiaInterface";

export type Entrada = {
    email : string,
    senha: string
}

export type Saida = {usuario: Usuario,token :string}

export default class LoginUsuario implements CasoDeUso<Entrada,Saida>{

    constructor(
        private repositorio : RepositorioUsuarioPG,
        private senhaCriptografada: ProvedorCriptografia
    ){}

    async executar(entrada: Entrada): Promise<Saida>{
        const usuarioExistente = await this.repositorio.buscarPorEmail(entrada.email)

        if(!usuarioExistente){
            throw new Error(Erros.USUARIO_NAO_LOCALIZADO)
        }

        const comparaSenha = this.senhaCriptografada.comparaSenha(entrada.senha,usuarioExistente.senha!)

        if(!comparaSenha){
             throw new Error(Erros.SENHA_NAO_CONFERE)
        }

        return {
            usuario: {...usuarioExistente,senha: undefined},
            token: ''
        }

    }
}