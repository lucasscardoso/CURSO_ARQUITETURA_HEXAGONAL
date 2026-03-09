import Usuario from "@/util/core/usuario/model/Usuario"
import repo from "@/util/core/usuario/service/RepoInterface"


export default class RepositorioUsuarioEmMemoria implements repo {
   

    private static readonly items: Usuario[] = []

    async inserir(usuario: Usuario) {
        const items = RepositorioUsuarioEmMemoria.items
        const usuarioExiste = await this.buscarPorEmail(usuario.email)
        if (usuarioExiste) return
        items.push(usuario)

    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        const repo = RepositorioUsuarioEmMemoria.items
        return repo.find(u => u.email === email) ?? null
    }

   async  deletaPorEmail(texto: string): Promise<boolean> {
        throw new Error("Method not implemented.")
    }
    async  alteraPorEmail(texto: string, novoTexto: string, Novotexto2: string): Promise<boolean> {
        throw new Error("Method not implemented.")
    }
}