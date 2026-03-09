import BuscarUsuario from "@/util/core/usuario/service/BuscarUsuario";

import { Express, Request, Response } from 'express'

export default class BuscarUsuarioController {

    constructor(
        servidor: Express,
        casoDeUso: BuscarUsuario
    ) {
        servidor.get('/api/usuarios/:email', async (req: Request<{email:string}>, resp: Response) => {
            
            try{ 
                const {email} = req.params
                const usuario =  await casoDeUso.executar(email) 
            resp.status(201).send(usuario)
            }catch(erro: any){
                resp.status(400).send(erro.message)
            }
          
        })     
    }
}