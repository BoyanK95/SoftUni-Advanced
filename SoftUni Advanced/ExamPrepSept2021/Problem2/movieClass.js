class Movie{
    constructor(movieName, ticketPrice){
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = []
    }

    newScreening(date, hall, description){
        for (const el of this.screenings) {
            if (el.date == date && el.hall == hall) {
                throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
            }
        }
        let screening = {date, hall, description};
        this.screenings.push(screening)
        return `New screening of ${this.movieName} is added.`
    };
    
    endScreening(date, hall, soldTickets){

    }

}




let m = new Movie("Wonder Woman 1984", "10.00");
console.log(m.newScreening("October 2, 2020", "IMAX 3D", `3D`));
console.log(m.newScreening("October 3, 2020", "Main", `regular`));
console.log(m.newScreening("October 4, 2020", "IMAX 3D", `3D`));
// console.log(m.endScreening("October 2, 2020", "IMAX 3D", 150));
// console.log(m.endScreening("October 3, 2020", "Main", 78));
// console.log(m.toString());
m.newScreening("October 4, 2020", "235", `regular`);
m.newScreening("October 5, 2020", "Main", `regular`);
m.newScreening("October 3, 2020", "235", `regular`);
m.newScreening("October 4, 2020", "Main", `regular`);
// console.log(m.toString());
