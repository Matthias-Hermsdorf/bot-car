var market = require('socket.io-client')('http://localhost:3095');
    
market.on('connect', function(){ 
    console.log("connecect to :3095") 
    market.emit("bot-add",{name:"C3PO"})
});
