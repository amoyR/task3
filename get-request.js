const http = require("http")
const server = http.createServer()

server.on("request", doRequest)
server.listen(8080)

function doRequest(request, response){
  response.write("Hello World")
  response.end()
}
