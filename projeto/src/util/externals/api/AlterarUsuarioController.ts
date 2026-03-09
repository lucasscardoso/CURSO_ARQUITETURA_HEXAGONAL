import AlteraUsuario from "@/util/core/usuario/service/AlteraUsuario";

import { Express, Request, Response } from 'express'

export default class AlterarUsuarioController {

    constructor(
        servidor: Express,
        casoDeUso: AlteraUsuario
    ) {
        servidor.post('/api/usuarios/alterar/:email', async (req: Request<{email:string}>, resp: Response) => {
            
            try{ 
                const {email} = req.params
                const {novoNome,novoEmail} = req.body
                
                const sucesso = await casoDeUso.executar({
                    email,
                    novoNome,
                    novoEmail
                })
                
            resp.status(201).send(sucesso)
            }catch(erro: any){
                resp.status(400).send(erro.message)
            }
          
        })     
    }
}