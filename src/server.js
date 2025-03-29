const http = require('http')

const PORT = 9799

function onClientReq(req, resp)
{
resp.writeHead(200)
resp.write('Hello World 2210511105001')
resp.end()
}

const server = http.createServer(onClientReq)
console.log('Server is running at ' + PORT)
server.listen(PORT)