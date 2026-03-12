import { Request, Response, NextFunction } from "express"
import RepositorioUsuarioPG from "../db/RepositorioUsuarioPG"
import ProvedorJwt from "./ProvedorJwt"
import Usuario from "@/util/core/usuario/model/Usuario"

export default function UsuarioMiddleware(repositorio: RepositorioUsuarioPG) {
    return async (req: Request, resp: Response, next: NextFunction) => {
        const acessoNegado = () => resp.status(403).send('token invalido')
        const token = req.headers.authorization?.replace('Bearer ', '')
        const provedor = new ProvedorJwt(process.env.JWT_SECRET!)

        if (!token) {
            return acessoNegado()  
        }
        

        const usuarioToken = provedor.obter(token) as Usuario
       const usuario =  repositorio.buscarPorEmail(usuarioToken.email)

        if(!usuario){
            return acessoNegado()
        }

        (req as any).usuario = usuario

        next()
    }

}