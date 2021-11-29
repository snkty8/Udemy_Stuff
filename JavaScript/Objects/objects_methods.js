let resturant = {
    Name: 'Wok N Roll',
    guestCapacity: 75,
    guestCount: 73,
    checkAvalibility: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    }
}

let Status = resturant.checkAvalibility(4)
console.log(Status)