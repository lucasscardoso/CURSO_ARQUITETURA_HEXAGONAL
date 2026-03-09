import CasoDeUso from "../../shared/casoDeUso";
import Erros from "../../shared/Erros";
import repo from "./RepoInterface";


export default class DeletarUsuario implements CasoDeUso<string, boolean> {

    constructor(
        
        private readonly repo: repo) {}

    async executar(email: string): Promise<boolean> {
       
        const usuarioExistente = await this.repo.buscarPorEmail(email)
        if (!usuarioExistente) throw new Error(`\n${Erros.USUARIO_NAO_LOCALIZADO}`)
        return await this.repo.deletaPorEmail(email)
       
    }


}