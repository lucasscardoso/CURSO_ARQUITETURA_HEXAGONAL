import DeletarUsuario from "@/util/core/usuario/service/DeletarUsuario";

import { Express, Request, Response } from 'express'

export default class DeletarUsuarioController {

    constructor(
        servidor: Express,
        casoDeUso: DeletarUsuario
    ) {
        servidor.delete('/api/usuarios/deletar/:email', async (req: Request<{email:string}>, resp: Response) => {
            
            try{ 
                const {email} = req.params
                const usuario =  await casoDeUso.executar(email) 
            resp.status(200).send(usuario)
            }catch(erro: any){
                resp.status(400).send(erro.message)
            }
          
        })     
    }
}