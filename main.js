
// const server = Bun.serve({
//   port: 8000, 
//   fetch(request) {
//     return new Response("Hi")
//   }
// })



// console.log(`Listening on port ${server.port}`);

const stringToHTTP = (str) => {

}

//@todo: trace the response to proxy CONNECT in my Ubuntu laptop

const sessionExists = () => {
  return false
}

const listner = Bun.listen({
  hostname: "localhost",
  port: 8000,
  socket: {
    open(socket) {},
    data(socket, data) {
      // console.log(socket.getTLSVersion)
      if (sessionExists) {
        
      } else{
        let str = new TextDecoder().decode(data)
        console.log(str)
      }
    },
    drain(socket) {},
    close(socket) {},
    error(socket, error) {},
  }
})


console.log(`Listening on port ${listner.port}`)