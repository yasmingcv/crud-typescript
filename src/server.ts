/******************************
 *  Objetivo: API REST utilizando TS e MySQL
 *  Autor: Luiz Gustavo e Yasmin Gonçalves
 *  Data: 26/12/2023
 *  Versão: 1.0
 ******************************/

import Express from 'express'
import routerUser from './routes/userRoutes'

const app = Express()

app.use(Express.json())
const PORT = 8080

const corsOptions = {
    origin: '*',
    methods: 'GET, POST, PUT, DELETE, OPTIONS, PATCH'
}

app.get('/', (request, response) => {
    return response.send({message: 'Hello World'})
})

app.use('/v1/user', routerUser)


app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
})

