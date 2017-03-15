var market = require('socket.io-client')('http://localhost:3095');
let ip = require('my-local-ip')();
    
market.on('connect', function(){ 
    console.log("connecect to :3095") 
    market.emit("device-add",{name:"C3PO",host:"http://"+ip+":4002", type:"car"})
});
