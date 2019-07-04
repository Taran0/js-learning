let isGuestOneVegan = true
let isGuestTwoVegan = false

//are both vegan - only offer up vegan dishes
//at least one vegan - make sure to offer up some vegan options
//else - offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('only vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('some vegan and some non-vegan options')
} else {
    console.log('anything on the menu')
}