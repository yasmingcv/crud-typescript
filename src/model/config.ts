/******************************;
 *  Objetivo: Responsável pelas constantes globais
 *  Autor: Luiz Gustavo e Yasmin Gonçalves
 *  Data: 26/12/2023
 *  Versão: 1.0
 ******************************/

/********* CONSTANTES DE ERROS *********/
const ERROR_REQUIRED_TOKEN = {status: 401, message: 'Token não fornecido.'}
const ERROR_INVALID_TOKEN = {status: 401, message: 'Token inválido.'}
const ERROR_CADASTRO = {status: 422, message: 'Erro ao realizar seu cadastro. Verique os dados e tente novamente. Obs: Não é permitido cadastrar o mesmo email.'}
const ERROR_INTERNAL_SERVER = {status: 500, message: 'Erro: Servidor está fora do ar, tente mais tarde.'}
const ERROR_NOT_FOUND = {status: 404, message: 'Erro: Nenhum usuário encontrado com os dados informados.'}
const ERROR_REQUIRED_FIELDS = {status: 401, message: 'Erro: Campos obrigatórios não preenchidos como deveriam.'}

/********* CONSTANTES DE ERROS *********/
const SUCCESS_CREATED_USER = {status: 201, message: 'Usuário criado com sucesso!'}
const SUCCESS_UPDATED_USER = {status: 200, message: 'Usuário atualizado com sucesso!'}
const SUCCESS_REQUISITION = {status: 200, message: 'Requisição bem sucedida!'}



export{
    ERROR_CADASTRO,
    ERROR_INTERNAL_SERVER,
    ERROR_REQUIRED_TOKEN,
    ERROR_INVALID_TOKEN,
    SUCCESS_CREATED_USER,
    ERROR_NOT_FOUND,
    SUCCESS_UPDATED_USER,
    SUCCESS_REQUISITION,
    ERROR_REQUIRED_FIELDS
}