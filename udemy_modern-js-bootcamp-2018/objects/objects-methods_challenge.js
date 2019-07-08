let restaurant = {
    name: 'NoNema',
    capacity: 50,
    guestAlready: 0,
    availability: function (peopleComing) {
        return this.capacity >= this.guestAlready + peopleComing
    },
    gyunnek: function (peopleComing) {
        this.guestAlready = this.guestAlready + peopleComing
    },
    mennek: function (peopleComing) {
        this.guestAlready = this.guestAlready - peopleComing
    }  
}

restaurant.gyunnek(48)
console.log(restaurant.availability(4))
restaurant.mennek(2)
console.log(restaurant.availability(4))