let resturant = {
    Name: 'Wok N Roll',
    guestCapacity: 75,
    guestCount: 0,
    checkAvalibility: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = partySize + this.guestCount
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
    
}

//seatParty


//removeParty



resturant.seatParty(8)
console.log(resturant.checkAvalibility)
resturant.removeParty(8)
console.log(resturant.checkAvalibility)
// let Status = resturant.checkAvalibility(4)
// console.log(Status)