let restaurant = {
    name:'Ennskraxblick',
    capacity: 50,
    guestNow: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.capacity - this.guestNow
        return partySize <= seatsLeft
    }  
}


console.log(restaurant.checkAvailability(4))





