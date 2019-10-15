//location.reload()

let socket = io();

let lblTicket1 = $('#lblTicket1');
let lblTicket2 = $('#lblTicket2');
let lblTicket3 = $('#lblTicket3');
let lblTicket4 = $('#lblTicket4');

let lblDesktop1 = $('#lblEscritorio1');
let lblDesktop2 = $('#lblEscritorio2');
let lblDesktop3 = $('#lblEscritorio3');
let lblDesktop4 = $('#lblEscritorio4');

let lblTickets = [lblTicket1,lblTicket2,lblTicket3,lblTicket4];

let lblDesktops = [lblDesktop1,lblDesktop2,lblDesktop3,lblDesktop4];

socket.on('ultimateTicket',function(data){
    let audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    updateHtml(data.ultimateFour);
});

socket.on('ultimate4',function(data){
    let audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    updateHtml(data.ultimateFour);
});

function updateHtml(ultimate4){
    for(let i = 0; i <= ultimate4.length -1 ; i++){
        console.log('works for');
        lblTickets[i].text('Ticket # ' + ultimate4[i].number)
        lblDesktops[i].text('Desktop # ' + ultimate4[i].desktop)
    }
}