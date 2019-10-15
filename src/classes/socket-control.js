const fs = require("fs");

class Ticket {
  constructor(number, desktop) {
    this.number = number;
    this.desktop = desktop;
  }
}
class TicketControl {
  constructor() {
    this.ultimate = 0;
    this.today = new Date().getDate();
    this.ticket = [];
    this.ultimateFour = [];

    let data = require("../data/data.json");
    //console.log(hoy);

    if (data.today === this.today) {
      this.ultimate = data.ultimate;
      this.ticket = data.ticket;
      this.ultimateFour = data.ultimateFour;
    } else {
      this.restartCounter();
    }
  }

  restartCounter() {
    this.ultimate = 0;
    this.ticket = [];
    this.ultimateFour = [];

    console.log("Server starting");
    this.saveTicket();
  }

  getUltimateFourTicket(){
      return this.ultimateFour;
  }

  attendTicket(desktop) {
    if (this.ticket.length === 0) {
      return "There isn't ticket";
    }
    //get the first position of array
    let numberTicket = this.ticket[0].number;
    //delete the first element of array
    this.ticket.shift();
    //assign number_ticket and desktop to object Ticket
    //create a new ticket
    let attend_ticket = new Ticket(numberTicket, desktop);
    // 'get ultimate four element 'move the primary 4 element a the position first
    this.ultimateFour.unshift(attend_ticket);

    if (this.ultimateFour.length > 4) {
      this.ultimateFour.splice(-1, 1);
    }
    console.log("Ultimate 4");
    console.log(this.ultimateFour);

    this.saveTicket();

    return attend_ticket;
  }

  getUltimateTicket() {
    return `Ticket #${this.ultimate}`;
  }

  nextTicket() {
    this.ultimate += 1;
    let tickets = new Ticket(this.ultimate, null);
    this.ticket.push(tickets);
    this.saveTicket();
    return `Ticket #${this.ultimate}`;
  }

  saveTicket() {
    //Container all data of my array
    let jsonData = {
      ultimate: this.ultimate,
      today: this.today,
      ticket: this.ticket,
      ultimateFour: this.ultimateFour
    };
    //Convert data in string
    let dataString = JSON.stringify(jsonData);
    //Read and write my object json
    fs.writeFileSync("./src/data/data.json", dataString);
  }
}

module.exports = { TicketControl };
