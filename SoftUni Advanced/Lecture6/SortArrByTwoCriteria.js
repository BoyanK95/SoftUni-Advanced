function sortByTwoCriteria(arr) {
   return arr.sort((a, b) => {
        a.length !== b.length ?
        a.length - b.length :
        a.localeCompare(b)
    }).join("\n")
}

console.log(sortByTwoCriteria(['alpha', 'beta', 'gamma']))