const { io } = require('../app')

io.on('connection',client =>{
    console.log('Server connected');
    
    client.on('disconnect',()=>{
        console.log('Client disconnected');        
    })

    //message received from client
    client.on('sendMessage', (data,callback) =>{
        console.log(data);
        client.broadcast.emit('sendMessage',data);
       /* if(data.user){
            callback({
                message : data
            })
        }else{
            callback({
                message : 'Upps algo salio mal'
            })
        }*/
    })

    //Send message client
    client.emit('sendMessage',{
        user : 'Admin',
        message : 'Welcome admin'
    })
})