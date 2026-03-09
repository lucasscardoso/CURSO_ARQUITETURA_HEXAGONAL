import Usuario from "@/util/core/usuario/model/Usuario"
import repo from "@/util/core/usuario/service/RepoInterface"
import db from "./db"


export default class RepositorioUsuarioPG implements repo {

    async inserir(usuario: Usuario) {
       await db.query(`
        INSERT INTO usuarios
        (id,nome,email,senha)
        VALUES ($1,$2,$3,$4)
        `,[
            usuario.id,
            usuario.nome,
            usuario.email,
            usuario.senha,
        ])
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
       const usuario = await db.oneOrNone(`
        SELECT * FROM usuarios where email = $1
        `,[email]
    ) 
    if(!usuario) return null
        return usuario
    }

     async deletaPorEmail(email: string): Promise<boolean> {
       const resultado = await db.result(`
        DELETE FROM usuarios where email = $1
        `,[email] 
    ) 
        return resultado.rowCount > 0;
    }

     async alteraPorEmail(email: string,novoNome: string,novoEmail: string): Promise<boolean> {
       
         const resultado = await db.result(`
        UPDATE usuarios
         SET nome = $2,
             email = $3
         where email = $1
        `,[email,novoNome,novoEmail] 
    ) 
        return resultado.rowCount > 0;
       
      
    }
}