const http = require("http")
const server = http.createServer()

server.on("request", doRequest)
server.listen(8085)

function doRequest(request, response){
  response.write("Hello World\n")
  //console.log(request)
  response.end()
}
