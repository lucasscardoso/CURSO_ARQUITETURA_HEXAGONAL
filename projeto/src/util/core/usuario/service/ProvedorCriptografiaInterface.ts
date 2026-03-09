export default interface ProvedorCriptografia{
    criptografar(texto:string):string
    comparaSenha(senha:string,senhaCriptografada:string):boolean
}