
    let socket = io();

    let searchParams = new URLSearchParams(window.location.search);

    if(!searchParams.has('escritorio')){
        window.location = 'index.html'
        throw new Error('The desktop is necesary')
    }

    let desktop = searchParams.get('escritorio');
    console.log(desktop);
    
    let label = $('small')
    $('h1').text('Desktop # ' + desktop)

    $('button').on('click',()=>{
        socket.emit('attendTicket',{desktop:desktop},function(resp){
            console.log(resp);
            
            if(resp === " There isn't ticket"){
                label.text(resp)
                alert(resp)
                return
            }
            label.text('Ticket : ' + resp.number);      
        })
    })
    









