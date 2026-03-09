import Usuario from "../model/Usuario";

export default interface repo{
     inserir(usuario: Usuario): Promise<void>
     buscarPorEmail(texto: string): Promise<Usuario | null>
     deletaPorEmail(texto: string): Promise<boolean>
     alteraPorEmail(texto: string,novoTexto: string,Novotexto2: string): Promise<boolean>
    
}