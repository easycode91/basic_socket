const { io } = require('../app')
const { TicketControl } = require('../classes/socket-control')

const ticketControl = new TicketControl();
io.on('connection',client =>{
    
    client.on('nextTicket',(data,callback)=>{
        callback(ticketControl.nextTicket())
    })

    client.emit('ultimateTicket',{
        current : ticketControl.getUltimateTicket(),
        ultimateFour : ticketControl.getUltimateFourTicket()
    })

    client.on('attendTicket',(data,callback)=>{
        if(!data.desktop){
            callback({
                ok : true,
                message :'The desktop is  necesary'
            })
        }

        let attend = ticketControl.attendTicket(data.desktop);
        callback(attend);

    })
    client.broadcast.emit('ultimate4',{
        ultimateFour : ticketControl.getUltimateFourTicket()
    })

})