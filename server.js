const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
    static: './build'
})

/*server.get('/container_line', (req, res) => {

    const container_line = router.db.get('container_line');
    res.json(container_line);

})*/

server.use(middlewares)
server.use(router)
server.listen(process.env.PORT || 3003, () => {
    console.log('JSON Server is running')
})