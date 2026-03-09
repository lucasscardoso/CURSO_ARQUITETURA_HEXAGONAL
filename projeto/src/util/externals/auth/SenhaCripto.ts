import ProvedorCriptografia from "@/util/core/usuario/service/ProvedorCriptografiaInterface";
import bcrypt from 'bcrypt'

export default class SenhaCripto implements ProvedorCriptografia{
    
    comparaSenha(senha: string, senhaCriptografada: string): boolean {
        return bcrypt.compareSync(senha,senhaCriptografada)
    }
    
    criptografar(texto: string): string {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(texto,salt)
    }

}