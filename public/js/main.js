
let socket = io();

//Listen event with 'on'
socket.on('connect',()=>{
    console.log('Connected');
    
})

//Listen event with 'on'
socket.on('disconnect',function(){
    console.log('Disconnected');
    
})

//Send event with 'emit'
socket.emit('sendMessage',{
    user : 'jhonatan',
    message : 'Hello from client by server'
},function(resp){
    console.log(resp);
    
})

//Receiving message from server
socket.on('sendMessage',(data)=>{
    console.log(data);
    
})