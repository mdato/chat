//const app = require('./app');
const http = require('./app');
const port = 3000;
/*
app.listen(port, ()=>{
    console.log('server corriendo en ', port)
})
*/

http.listen(port, ()=>{
    console.log('server running in: ', port)
})
