let resturant = {
    Name: 'Wok N Roll',
    guestCapacity: 75,
    guestCount: 0,
    checkAvalibility: function (partySize) {
        console.log(partySize)
    }
}

resturant.checkAvalibility(4)