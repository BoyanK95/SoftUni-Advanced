function solve(tickets, sortCriteria) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status
        }
    }

    let result = [];

    tickets.map((el) =>{
        let [destination, price, status] = el.split('|')
        price= Number(price);
        result.push(new Ticket(destination, price, status));
    });
    
  result.sort((a, b)=> {
     if (typeof a[sortCriteria] === 'number') {
        return a[sortCriteria] - b[sortCriteria];
     }else{
        return a[sortCriteria].localeCompare(b[sortCriteria])
     };
  });
  return result
}


solve([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
    "destination")

