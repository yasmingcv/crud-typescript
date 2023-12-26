/******************************;
 *  Objetivo: Model responsável por gerenciar funções de dados do database
 *  Autor: Luiz Gustavo e Yasmin Gonçalves
 *  Data: 26/12/2023
 *  Versão: 1.0
 ******************************/

import { PrismaClient } from '@prisma/client'
import {UserGet, UserPost} from '../../interface/User'
const prisma = new PrismaClient()

async function insertUser (dadosUsuario: UserPost): Promise<boolean> {
    const sql = `insert into users (nome, email) values ('${dadosUsuario.nome}', '${dadosUsuario.email}')`

    const rsUser = await prisma.$executeRawUnsafe(sql)

    if(rsUser){
        return true
    } else {
        return false
    }
}

async function updateUser (dadosUsuario: UserGet): Promise<boolean> {
    const sql = `update users set nome = '${dadosUsuario.nome}', email = '${dadosUsuario.email}' where id = ${dadosUsuario.id}`

    const rsUser = await prisma.$executeRawUnsafe(sql)

    if(rsUser){
        return true
    } else {
        return false
    }
}

async function selectUserByEmail(email: string): Promise<boolean>{
    const sql = `select * from users where email = '${email}'`

    const rsUser = await prisma.$queryRawUnsafe(sql)

    if(rsUser != ''){
        return true
    } else {
        return false
    }
}

async function selectUserById(id: number): Promise<Array<UserGet>>{
    const sql = `select * from users where id = ${id}`

    const rsUser: Array<UserGet> = await prisma.$queryRawUnsafe(sql)

    return rsUser
}

async function deleteUserById(id: number): Promise<boolean>{
    const sql = `delete from users where id = ${id}`

    const rsUser: boolean = await prisma.$queryRawUnsafe(sql)

    return rsUser
}

async function selectLastId(): Promise<UserGet>{
    let sql = `select * from users order by id desc limit 1`

    let rsUser = await prisma.$queryRawUnsafe(sql)

    return rsUser[0]
}

export{
    insertUser,
    selectUserByEmail,
    selectLastId,
    updateUser,
    selectUserById,
    deleteUserById
}