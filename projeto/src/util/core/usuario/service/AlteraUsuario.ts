import CasoDeUso from "../../shared/casoDeUso";
import repo from "./RepoInterface";

type EntradaUsuario = {
    email:string,
    novoEmail:string,
    novoNome:string

}
export default class AlteraUsuario implements CasoDeUso<EntradaUsuario,boolean> {

    constructor(
        
        private readonly repo: repo) {}

    async executar(entrada: EntradaUsuario): Promise<boolean> {
       const{email,novoEmail,novoNome} = entrada
       return this.repo.alteraPorEmail(email,novoEmail,novoNome)
       
    }


}