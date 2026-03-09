import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import RegistrarUsuario from './util/core/usuario/service/RegistrarUsuario'
import RepositorioUsuarioPG from './util/externals/db/RepositorioUsuarioPG'
import SenhaCripto from './util/externals/auth/SenhaCripto'
import RegistrarUsuarioController from './util/externals/api/RegistrarUsuarioController'
import BuscarrUsuarioController from './util/externals/api/BuscarUsuarioController'
import BuscarUsuario from './util/core/usuario/service/BuscarUsuario'
import DeletarUsuarioController from './util/externals/api/DeletarUsuarioController'
import DeletarUsuario from './util/core/usuario/service/DeletarUsuario'
import AlteraUsuario from './util/core/usuario/service/AlteraUsuario'
import AlterarUsuarioController from './util/externals/api/AlterarUsuarioController'
const app = express()
const porta = process.env.API_PORT ?? 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(porta, () => {
    console.log(`✔ Servidor executando na porta ${porta}`)
})

//---- rotas abertas-----/
const repositorioUsuario = new RepositorioUsuarioPG()
const senhaCripto = new SenhaCripto()

//---- caso de uso-----/
const registrarUsuario = new RegistrarUsuario(senhaCripto,repositorioUsuario)
const busca = new BuscarUsuario(repositorioUsuario)
const deleta = new DeletarUsuario(repositorioUsuario)
const alterar = new AlteraUsuario(repositorioUsuario)

//---- rotas abertas-----/
new RegistrarUsuarioController (app,registrarUsuario)
new BuscarrUsuarioController(app,busca)
new DeletarUsuarioController(app,deleta)
new AlterarUsuarioController(app,alterar)