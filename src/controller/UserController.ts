import { selectUserByEmail, selectLastId, insertUser, selectUserById, updateUser, deleteUserById } from "../model/DAO"
import { UserGet, UserPost } from "../interface/User"
import * as config from '../model/config'


const createUser = async (data: UserPost) => {
    const userExist = await selectUserByEmail(data.email)

    if (
        data.nome == '' || data.nome.length > 100 || data.nome == null ||
        data.email == '' || data.email.length > 255 || data.email == null
    ) {
        return {
            error: true,
            status: config.ERROR_REQUIRED_FIELDS.status,
            message: config.ERROR_REQUIRED_FIELDS.message
        }
    } else {
        if (userExist) {
            return {
                error: true,
                status: config.ERROR_CADASTRO.status,
                message: config.ERROR_CADASTRO.message
            }
        } else {
            const dataUser = await insertUser(data)

            if (dataUser) {
                const newUser = await selectLastId()

                return {
                    error: false,
                    status: config.SUCCESS_CREATED_USER.status,
                    message: config.SUCCESS_CREATED_USER.message,
                    data: newUser
                }
            } else {
                return {
                    error: true,
                    status: config.ERROR_INTERNAL_SERVER.status,
                    message: config.ERROR_INTERNAL_SERVER.message
                }
            }
        }
    }


}

const atualizarUser = async (data: UserGet) => {

    if (
        data.nome == '' || data.nome.length > 100 || data.nome == null ||
        data.email == '' || data.email.length > 255 || data.email == null ||
        data.id == null || data.id == 0
    ) {
        return {
            error: true,
            status: config.ERROR_REQUIRED_FIELDS.status,
            message: config.ERROR_REQUIRED_FIELDS.message
        }
    } else {
        const userExist = await selectUserById(data.id)

        if (!userExist) {
            return {
                error: true,
                status: config.ERROR_CADASTRO.status,
                message: config.ERROR_CADASTRO.message
            }
        } else {
            const dataUser = await updateUser(data)

            if (dataUser) {
                const updatedUser = await selectUserById(data.id)

                return {
                    error: false,
                    status: config.SUCCESS_UPDATED_USER.status,
                    message: config.SUCCESS_UPDATED_USER.message,
                    data: updatedUser
                }
            } else {
                return {
                    error: true,
                    status: config.ERROR_NOT_FOUND.status,
                    message: config.ERROR_NOT_FOUND.message
                }
            }
        }
    }



}

const getUserById = async (id: number) => {
    //verificar pelo id:
    const user = await selectUserById(id)

    if (user.length > 0) {
        return {
            error: false,
            status: config.SUCCESS_REQUISITION.status,
            message: config.SUCCESS_REQUISITION.message,
            data: user
        }
    } else {
        return {
            error: false,
            status: config.ERROR_NOT_FOUND.status,
            message: config.ERROR_NOT_FOUND.message
        }
    }

}

const apagarUser = async (id: number) => {
    //verificar pelo id se existe:
    const user = await selectUserById(id)

    if (user.length > 0) {
        const resultStatus = await deleteUserById(id)

        if (resultStatus) {
            return {
                error: false,
                status: config.SUCCESS_REQUISITION.status,
                message: config.SUCCESS_REQUISITION.message
            }
        } else {
            return {
                error: true,
                status: config.ERROR_INTERNAL_SERVER.status,
                message: config.ERROR_INTERNAL_SERVER.message
            }
        }
    } else {
        return {
            error: false,
            status: config.ERROR_NOT_FOUND.status,
            message: config.ERROR_NOT_FOUND.message
        }
    }

}



export {
    createUser,
    updateUser,
    getUserById,
    atualizarUser,
    apagarUser
}