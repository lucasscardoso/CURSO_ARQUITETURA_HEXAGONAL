import CasoDeUso from "../../shared/casoDeUso";
import Erros from "../../shared/Erros";
import Id from "../../shared/Id";
import Usuario from "../model/Usuario";
import ProvedorCriptografia from "./ProvedorCriptografiaInterface";
import repo from "./RepoInterface";


export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {

    constructor(
        private readonly provedorCripto: ProvedorCriptografia,
        private readonly repo: repo) { }

    async executar(usuario: Usuario): Promise<void> {

        if (!usuario.senha) {
            throw new Error("A senha é obrigatória para registrar um usuário.");
        }
        const senhaCripto = this.provedorCripto.criptografar(usuario.senha)

        const usuarioExistente = await this.repo.buscarPorEmail(usuario.email)
        if (usuarioExistente) throw new Error(`\n${Erros.USUARIO_JA_EXISTE}`)

        const novoUsuario: Usuario = {
            id: Id.gerarHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCripto

        }
        this.repo.inserir(novoUsuario)

    }


}