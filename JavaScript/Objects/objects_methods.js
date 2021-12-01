let resturant = {
    Name: 'Wok N Roll',
    guestCapacity: 75,
    guestCount: 0,
    checkAvalibility: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        seats = partySize + this.guestCount
        console.log(seats)
    },
    removeParty: function (partySize) {
        gone = this.guestCount - partySize
        console.log(gone)
    }
    
}



resturant.seatParty(8)
console.log(resturant.checkAvalibility)
resturant.removeParty(8)
console.log(resturant.checkAvalibility)
