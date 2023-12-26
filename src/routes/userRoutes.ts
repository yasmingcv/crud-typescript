/******************************
 *  Objetivo: Rotas do crud de usuários
 *  Autor: Luiz Gustavo e Yasmin Gonçalves
 *  Data: 26/12/2023
 *  Versão: 1.0
 ******************************/
import { Request, Response } from "express"
import  Express, { Router }  from "express"
import * as userController from '../controller/UserController'
import { UserGet, UserPost } from "../interface/User"

const routerUser: Router = Express.Router()

routerUser.post('/', async (request: Request, response: Response) => {
    const { nome, email } = request.body
    const data: UserPost = {
        nome: nome,
        email: email
    }

    const dataUser = await userController.createUser(data)

    response.status(dataUser.status)
    response.json(dataUser)
})

routerUser.put('/:id', async (request: Request, response: Response) => {
    const { nome, email } = request.body
    const id = request.params.id

    const data: UserGet = {
        id: Number(id),
        nome: nome,
        email: email
    }


    const dataUser = await userController.atualizarUser(data)

    response.status(dataUser.status)
    response.json(dataUser)
})

routerUser.get('/:id', async (request: Request, response: Response) => {
    const id = request.params.id

    const result = await userController.getUserById(Number(id))

    response.status(result.status)
    response.json(result)
})

routerUser.delete('/:id', async (request: Request, response: Response) => {
    const id = request.params.id

    const result = await userController.apagarUser(Number(id))

    response.status(result.status)
    response.json(result)
})

export default routerUser