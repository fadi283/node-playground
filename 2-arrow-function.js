// const square = function(x){
//     return x * x
// }


// const square = (x) => {
//     return x * x 
// } 

const square = (x) => x * x


const events = {
    name:'Birthday party',
    guestList: ['ahmad', 'mahmod', 'mohammad'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is atending ' + this.name)
        }

        )
    }
}
//console.log(square(8))
events.printGuestList()