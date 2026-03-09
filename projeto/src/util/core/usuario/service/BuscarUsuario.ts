import CasoDeUso from "../../shared/casoDeUso";
import { UsuarioDTO } from "../../shared/UsuarioDto";
import repo from "./RepoInterface";


export default class BuscarUsuario implements CasoDeUso<string,UsuarioDTO| null> {

    constructor(
        
        private readonly repo: repo) {}

    async executar(email: string): Promise<UsuarioDTO | null> {
       
        const usuarioExistente = await this.repo.buscarPorEmail(email)
         if(!usuarioExistente) return null
        return {
            nome: usuarioExistente.nome,
            email: usuarioExistente.email
        };
       
    }


}