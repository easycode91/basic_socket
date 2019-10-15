$('document').ready(function(){
let socket = io();
let lblTicket = $('#lblNuevoTicket')


    socket.on('ultimateTicket',(data)=>{
    lblTicket.text(data.current);            
    })


//Listen event with 'on'
socket.on('connect',()=>{
    console.log('Connected server');

})

socket.on('disconnect',()=>{
    console.log('Disconnect server');
    
})
$('button').on('click',()=>{
    socket.emit('nextTicket',null,function(nextTicket){
        lblTicket.text(nextTicket);
    })
})


})